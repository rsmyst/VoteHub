import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const resolvedId = await params.id;
    const poll = await prisma.poll.findUnique({
      where: { id: resolvedId },
      include: {
        options: true,
        categories: {
          include: {
            category: true,
          },
        },
        creator: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!poll) {
      return NextResponse.json({ message: "Poll not found" }, { status: 404 });
    }

    const user = await getCurrentUser();
    if (!poll.isPublic && (!user || user.userId !== poll.creator.id)) {
      return NextResponse.json(
        { message: "Not authorized to view this poll" },
        { status: 403 }
      );
    }

    return NextResponse.json(poll);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 }
      );
    }

    const resolvedId = await params.id;
    const poll = await prisma.poll.findUnique({
      where: { id: resolvedId },
      include: {
        creator: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!poll) {
      return NextResponse.json({ message: "Poll not found" }, { status: 404 });
    }

    if (poll.creator.id !== user.userId) {
      return NextResponse.json(
        { message: "Not authorized to edit this poll" },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { title, description, isPublic, roomCode, options, categories } =
      body;

    // Update poll and its relations in a transaction
    const updatedPoll = await prisma.$transaction(async (tx) => {
      // Update poll
      const poll = await tx.poll.update({
        where: { id: resolvedId },
        data: {
          title,
          description,
          isPublic,
          roomCode,
        },
      });

      // Delete existing options and create new ones
      await tx.option.deleteMany({
        where: { pollId: resolvedId },
      });

      await tx.option.createMany({
        data: options.map((text: string) => ({
          pollId: resolvedId,
          text,
        })),
      });

      // Update categories
      await tx.pollCategory.deleteMany({
        where: { pollId: resolvedId },
      });

      await tx.pollCategory.createMany({
        data: categories.map((categoryId: string) => ({
          pollId: resolvedId,
          categoryId,
        })),
      });

      return poll;
    });

    return NextResponse.json(updatedPoll);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
