"use client";

import type { PollWithRelations } from "@/types/poll";

type PollResultsProps = {
  poll: PollWithRelations & {
    creator: {
      name: string | null;
    };
    options: Array<{
      id: string;
      text: string;
      votes: Array<{
        id: string;
      }>;
    }>;
  };
};

export default function PollResults({ poll }: PollResultsProps) {
  const totalVotes = poll.options.reduce(
    (sum, option) => sum + option.votes.length,
    0
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Results</h2>
      <div className="space-y-4">
        {poll.options.map((option) => {
          const voteCount = option.votes.length;
          const percentage =
            totalVotes === 0 ? 0 : Math.round((voteCount / totalVotes) * 100);

          return (
            <div key={option.id} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{option.text}</span>
                <span className="text-gray-500 dark:text-gray-400">
                  {voteCount} vote{voteCount !== 1 ? "s" : ""} ({percentage}%)
                </span>
              </div>
              <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
        Total votes: {totalVotes}
      </div>
    </div>
  );
}
