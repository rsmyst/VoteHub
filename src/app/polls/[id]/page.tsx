import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import PollVote from "@/components/PollVote";
import PollResults from "@/components/PollResults";

async function getPoll(id: Promise<string> | string) {
  const resolvedId = await id;
  const poll = await prisma.poll.findUnique({
    where: { id: resolvedId },
    include: {
      options: {
        include: {
          votes: true,
        },
      },
      categories: {
        include: {
          category: true,
        },
      },
      creator: {
        select: {
          name: true,
        },
      },
    },
  });

  if (!poll) {
    notFound();
  }

  return poll;
}

export default async function PollPage({ params }: { params: { id: string } }) {
  const [poll, user] = await Promise.all([
    getPoll(params.id),
    getCurrentUser(),
  ]);

  // Check if user has already voted
  let hasVoted = false;
  if (user) {
    const vote = await prisma.vote.findFirst({
      where: {
        pollId: poll.id,
        userId: user.userId,
      },
    });
    hasVoted = !!vote;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
        {poll.title}
      </h1>
      {poll.description && (
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {poll.description}
        </p>
      )}

      <div className="mb-6">
        <div className="flex flex-wrap gap-2 mb-2">
          {poll.categories.map(({ category }) => (
            <span
              key={category.id}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
            >
              {category.name}
            </span>
          ))}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
          <p>Created by {poll.creator.name}</p>
          <div className="flex items-center gap-2">
            <span>Status:</span>
            <span
              className={`px-2 py-0.5 rounded-full text-xs ${
                poll.status === "ACTIVE"
                  ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
                  : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200"
              }`}
            >
              {poll.status === "ACTIVE" ? "Active" : "Closed"}
            </span>
          </div>
        </div>
      </div>

      {poll.status === "CLOSED" ? (
        <div>
          <div className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
            <p className="text-yellow-800 dark:text-yellow-200">
              This poll is closed and no longer accepting votes
            </p>
          </div>
          <PollResults poll={poll} />
        </div>
      ) : hasVoted ? (
        <PollResults poll={poll} />
      ) : (
        <PollVote poll={poll} user={user} />
      )}
    </div>
  );
}
