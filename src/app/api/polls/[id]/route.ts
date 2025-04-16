import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const poll = await prisma.poll.findUnique({
      where: { id: resolvedParams.id },
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
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 }
      );
    }

    const resolvedParams = await params;
    const poll = await prisma.poll.findUnique({
      where: { id: resolvedParams.id },
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
    const {
      title,
      description,
      isPublic,
      roomCode,
      options,
      categories,
      status,
    } = body;

    // Update poll and its relations in a transaction
    const updatedPoll = await prisma.$transaction(async (tx) => {
      // Update poll
      const poll = await tx.poll.update({
        where: { id: resolvedParams.id },
        data: {
          title,
          description,
          isPublic,
          roomCode,
          status,
        },
      });

      // Delete existing options and create new ones
      await tx.option.deleteMany({
        where: { pollId: resolvedParams.id },
      });

      await tx.option.createMany({
        data: options.map((text: string) => ({
          pollId: resolvedParams.id,
          text,
        })),
      });

      // Update categories
      await tx.pollCategory.deleteMany({
        where: { pollId: resolvedParams.id },
      });

      await tx.pollCategory.createMany({
        data: categories.map((categoryId: string) => ({
          pollId: resolvedParams.id,
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
