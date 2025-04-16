import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

async function getPolls() {
  return await prisma.poll.findMany({
    where: {
      isPublic: true,
      status: "ACTIVE",
    },
    include: {
      options: true,
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
    orderBy: {
      createdAt: "desc",
    },
  });
}

function PollCard({ poll }: { poll: any }) {
  return (
    <Link href={`/polls/${poll.id}`}>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 dark:border-gray-700">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {poll.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {poll.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {poll.categories.map((pc: any) => (
            <span
              key={pc.category.id}
              className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
            >
              {pc.category.name}
            </span>
          ))}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
          <span>Created by {poll.creator.name}</span>
        </div>
      </div>
    </Link>
  );
}

export default async function BrowsePollsPage() {
  const polls = await getPolls();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Browse Polls
      </h1>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {polls.map((poll) => (
            <PollCard key={poll.id} poll={poll} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}
