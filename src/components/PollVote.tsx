"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type PollVoteProps = {
  poll: any;
  user: any;
};

export default function PollVote({ poll, user }: PollVoteProps) {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVote = async () => {
    if (!selectedOption) {
      setError("Please select an option");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/votes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pollId: poll.id,
          optionId: selectedOption,
          userId: user?.userId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit vote");
      }

      router.refresh();
    } catch (err) {
      setError("Failed to submit vote");
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {poll.options.map((option: any) => (
          <label
            key={option.id}
            className={`block p-4 rounded-lg border-2 cursor-pointer transition-colors ${
              selectedOption === option.id
                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30"
                : "border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800"
            }`}
          >
            <input
              type="radio"
              name="option"
              value={option.id}
              checked={selectedOption === option.id}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="sr-only"
            />
            <span className="text-gray-900 dark:text-white">{option.text}</span>
          </label>
        ))}
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        onClick={handleVote}
        disabled={loading}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Vote"}
      </button>
    </div>
  );
}
