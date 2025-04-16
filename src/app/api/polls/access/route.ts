import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

async function handlePollAccess(code: string) {
  const poll = await prisma.poll.findFirst({
    where: {
      roomCode: code,
      status: "ACTIVE",
    },
  });

  if (!poll) {
    return NextResponse.json(
      { message: "Invalid or expired poll code" },
      { status: 404 }
    );
  }

  return NextResponse.json({ pollId: poll.id });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json(
      { message: "Poll code is required" },
      { status: 400 }
    );
  }

  return handlePollAccess(code);
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const code = formData.get("code") as string;

    if (!code) {
      return NextResponse.json(
        { message: "Poll code is required" },
        { status: 400 }
      );
    }

    const response = await handlePollAccess(code);
    if (response.status === 404) {
      return response;
    }

    const { pollId } = await response.json();
    return NextResponse.redirect(new URL(`/polls/${pollId}`, request.url));
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
