import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";
import { nanoid } from "nanoid";

export async function POST(request: Request) {
  try {
    const token = cookies().get("token")?.value;

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    const { title, description, isPublic, categories, options } =
      await request.json();

    if (!title || !options || options.length < 2) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Generate room code for private polls
    const roomCode = !isPublic ? nanoid(6) : null;

    // Create or get categories
    const categoryConnections = await Promise.all(
      categories.map(async (name: string) => {
        const category = await prisma.category.upsert({
          where: { name },
          update: {},
          create: { name },
        });
        return { categoryId: category.id };
      })
    );

    // Create the poll with options and categories
    const poll = await prisma.poll.create({
      data: {
        title,
        description,
        isPublic,
        roomCode,
        creatorId: payload.userId,
        options: {
          create: options.map((text: string) => ({ text })),
        },
        categories: {
          create: categoryConnections,
        },
      },
      include: {
        options: true,
        categories: {
          include: {
            category: true,
          },
        },
      },
    });

    return NextResponse.json({ poll }, { status: 201 });
  } catch (error) {
    console.error("Create poll error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
