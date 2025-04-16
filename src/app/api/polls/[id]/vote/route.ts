import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { optionId } = await request.json();
    const resolvedId = await params.id;

    if (!optionId) {
      return NextResponse.json(
        { message: "Missing option ID" },
        { status: 400 }
      );
    }

    // Get the poll to check if it's still active
    const poll = await prisma.poll.findUnique({
      where: { id: resolvedId },
    });

    if (!poll) {
      return NextResponse.json({ message: "Poll not found" }, { status: 404 });
    }

    if (poll.status === "CLOSED") {
      return NextResponse.json({ message: "Poll is closed" }, { status: 400 });
    }

    // Check if the option belongs to this poll
    const option = await prisma.option.findUnique({
      where: { id: optionId },
    });

    if (!option || option.pollId !== poll.id) {
      return NextResponse.json({ message: "Invalid option" }, { status: 400 });
    }

    // Handle authenticated vs anonymous votes
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    let userId: string | null = null;
    let sessionId: string | null = null;

    if (token) {
      const payload = verifyToken(token);
      if (payload) {
        userId = payload.userId;

        // Check if user has already voted
        const existingVote = await prisma.vote.findFirst({
          where: {
            pollId: poll.id,
            userId,
          },
        });

        if (existingVote) {
          return NextResponse.json(
            { message: "You have already voted on this poll" },
            { status: 400 }
          );
        }
      }
    } else {
      // For anonymous users, check if the poll is public
      if (!poll.isPublic) {
        return NextResponse.json(
          { message: "You must be logged in to vote on private polls" },
          { status: 403 }
        );
      }

      // Handle anonymous vote
      const existingSessionId = cookieStore.get("session")?.value;

      if (existingSessionId) {
        // Check if this session has already voted
        const existingVote = await prisma.vote.findFirst({
          where: {
            pollId: poll.id,
            sessionId: existingSessionId,
          },
        });

        if (existingVote) {
          return NextResponse.json(
            { message: "You have already voted on this poll" },
            { status: 400 }
          );
        }

        sessionId = existingSessionId;
      } else {
        // Create a new session
        const session = await prisma.session.create({
          data: {
            expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
          },
        });
        sessionId = session.id;
      }
    }

    // Create the vote and add to poll participants in a transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create the vote
      const vote = await tx.vote.create({
        data: {
          pollId: poll.id,
          optionId,
          userId,
          sessionId,
        },
      });

      // Add to poll participants if not already there
      if (userId) {
        // For authenticated users, check if they're already a participant
        const existingParticipant = await tx.pollParticipant.findFirst({
          where: {
            pollId: poll.id,
            email: userId, // Using userId as email for now
          },
        });

        if (!existingParticipant) {
          await tx.pollParticipant.create({
            data: {
              pollId: poll.id,
              email: userId, // Using userId as email for now
              status: "ACCEPTED",
              respondedAt: new Date(),
            },
          });
        }
      } else if (sessionId) {
        // For anonymous users, create a participant with a placeholder email
        await tx.pollParticipant.create({
          data: {
            pollId: poll.id,
            email: `anonymous-${sessionId.substring(0, 8)}@anonymous.com`,
            status: "ACCEPTED",
            respondedAt: new Date(),
          },
        });
      }

      return vote;
    });

    // If this was an anonymous vote with a new session, set the session cookie
    const response = NextResponse.json({ vote: result });

    if (sessionId && !cookieStore.get("session")) {
      response.cookies.set("session", sessionId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 30 * 24 * 60 * 60, // 30 days
      });
    }

    return response;
  } catch (error) {
    console.error("Vote error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
