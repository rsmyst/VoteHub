"use client";

import { useState, useEffect } from "react";
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
  const [success, setSuccess] = useState(false);
  const [showLoginAlert, setShowLoginAlert] = useState(false);

  // Force a hard refresh after successful vote
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        window.location.reload();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleVote = async () => {
    if (!selectedOption) {
      setError("Please select an option");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);
    setShowLoginAlert(false);

    try {
      const response = await fetch(`/api/polls/${poll.id}/vote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          optionId: selectedOption,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Check if this is a private poll access error
        if (response.status === 403 && data.message?.includes("logged in")) {
          setShowLoginAlert(true);
          setLoading(false);
          return;
        }
        throw new Error(data.message || "Failed to submit vote");
      }

      // Show success message
      setSuccess(true);
      setLoading(false);
      
      // For authenticated users, use router.refresh()
      if (user) {
        setTimeout(() => {
          router.refresh();
        }, 1500);
      }
      // For anonymous users, the useEffect will handle the refresh
    } catch (err: any) {
      setError(err.message || "Failed to submit vote");
      setLoading(false);
    }
  };

  if (showLoginAlert) {
    return (
      <div className="p-6 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-2 border-yellow-500 text-center">
        <h3 className="text-lg font-medium text-yellow-800 dark:text-yellow-200 mb-2">
          Login Required
        </h3>
        <p className="text-yellow-700 dark:text-yellow-300 mb-4">
          Please login to vote on private polls.
        </p>
        <button
          onClick={() => router.push("/login")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Go to Login
        </button>
      </div>
    );
  }

  if (success) {
    return (
      <div className="p-6 bg-green-50 dark:bg-green-900/30 rounded-lg border-2 border-green-500 text-center">
        <h3 className="text-lg font-medium text-green-800 dark:text-green-200 mb-2">
          Vote Submitted Successfully!
        </h3>
        <p className="text-green-700 dark:text-green-300">
          Thank you for your vote. Refreshing to show results...
        </p>
      </div>
    );
  }

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
              disabled={loading}
            />
            <span className="text-gray-900 dark:text-white">{option.text}</span>
          </label>
        ))}
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        onClick={handleVote}
        disabled={loading || !selectedOption}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Vote"}
      </button>
    </div>
  );
}
