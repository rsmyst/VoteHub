import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import type { PollWithRelations } from "@/types/poll";

async function getUserPolls(userId: string): Promise<PollWithRelations[]> {
  return await prisma.poll.findMany({
    where: {
      creatorId: userId,
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
    orderBy: {
      createdAt: "desc",
    },
  });
}

export default async function Dashboard() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/signin");
  }

  const polls = await getUserPolls(user.userId);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Polls</h1>
        <Link
          href="/create"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Create New Poll
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {polls.map((poll) => (
          <div
            key={poll.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
          >
            <h2 className="text-xl font-semibold mb-2">{poll.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
              {poll.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {poll.categories.map(({ category }) => (
                <span
                  key={category.id}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                >
                  {category.name}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>
                {poll.isPublic ? "Public" : "Private"}
                {!poll.isPublic && poll.roomCode && ` • Code: ${poll.roomCode}`}
              </span>
              <span>{poll.status}</span>
            </div>

            <div className="mt-4 flex space-x-2">
              <Link
                href={`/polls/${poll.id}`}
                className="flex-1 text-center px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              >
                View
              </Link>
              <Link
                href={`/polls/${poll.id}/edit`}
                className="flex-1 text-center px-3 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-md hover:bg-blue-200 dark:hover:bg-blue-800 transition"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}

        {polls.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              You haven't created any polls yet.
            </p>
            <Link
              href="/create"
              className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Create Your First Poll
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
