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

    if (!optionId) {
      return NextResponse.json(
        { message: "Missing option ID" },
        { status: 400 }
      );
    }

    // Get the poll to check if it's still active
    const poll = await prisma.poll.findUnique({
      where: { id: params.id },
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
    const cookieStore = cookies();
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

    // Create the vote
    const vote = await prisma.vote.create({
      data: {
        pollId: poll.id,
        optionId,
        userId,
        sessionId,
      },
    });

    // If this was an anonymous vote with a new session, set the session cookie
    const response = NextResponse.json({ vote });

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
