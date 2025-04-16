import Link from "next/link";
import { prisma } from "@/lib/prisma";
import type { PollWithRelations } from "@/types/poll";
import PollAccessForm from "@/components/PollAccessForm";

// Disable caching so new polls appear immediately
export const revalidate = 0;

async function getFeaturedPolls(): Promise<PollWithRelations[]> {
  return await prisma.poll.findMany({
    where: {
      isPublic: true,
      status: "ACTIVE",
    },
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
    take: 6,
    orderBy: {
      createdAt: "desc",
    },
  });
}

export default async function Home() {
  const featuredPolls = await getFeaturedPolls();

  return (
    <div className="space-y-12">
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Create and Share Polls Instantly
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          VoteHub lets you create anonymous polls, gather feedback, and make
          decisions together.
        </p>
        <div className="space-x-4">
          <Link
            href="/create"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Create a Poll
          </Link>
          <Link
            href="/polls"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
          >
            Browse Polls
          </Link>
        </div>
      </section>

      <section className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">
          Access Private Poll
        </h2>
        <PollAccessForm />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Featured Polls
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPolls.map((poll) => (
            <Link
              key={poll.id}
              href={`/polls/${poll.id}`}
              className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {poll.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                {poll.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {poll.categories.map(({ category }) => (
                  <span
                    key={category.id}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
