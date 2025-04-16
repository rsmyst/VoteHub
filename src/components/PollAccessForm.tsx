"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PollAccessForm() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showLoginAlert, setShowLoginAlert] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // Check authentication status on component mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check if token cookie exists
        const hasToken = document.cookie.includes("token=");
        setIsAuthenticated(hasToken);
      } catch (err) {
        console.error("Error checking authentication:", err);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowLoginAlert(false);

    try {
      // Check if user is logged in
      if (!isAuthenticated) {
        setShowLoginAlert(true);
        setLoading(false);
        return;
      }

      // If user is logged in, proceed with form submission
      const formData = new FormData();
      formData.append("code", code);

      const response = await fetch("/api/polls/access", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to access poll");
      }

      // Redirect to the poll page
      const { pollId } = await response.json();
      router.push(`/polls/${pollId}`);
    } catch (err: any) {
      setError(err.message || "Failed to access poll");
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
          Please login to access private polls.
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

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter poll code"
          className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          required
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
      >
        {loading ? "Accessing..." : "Access Poll"}
      </button>
    </form>
  );
}
