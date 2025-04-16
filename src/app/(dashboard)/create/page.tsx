"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/UserContext";

type Option = {
  id: string;
  text: string;
};

export default function CreatePoll() {
  const router = useRouter();
  const { user } = useUser();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPublic, setIsPublic] = useState(true);
  const [roomCode, setRoomCode] = useState("");
  const [options, setOptions] = useState<Option[]>([
    { id: "1", text: "" },
    { id: "2", text: "" },
  ]);

  const addOption = () => {
    setOptions([...options, { id: Date.now().toString(), text: "" }]);
  };

  const removeOption = (id: string) => {
    if (options.length > 2) {
      setOptions(options.filter((option) => option.id !== id));
    }
  };

  const updateOption = (id: string, text: string) => {
    setOptions(
      options.map((option) => (option.id === id ? { ...option, text } : option))
    );
  };

  const generateRoomCode = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setRoomCode(code);
  };

  const handlePublicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isPublic = e.target.value === "true";
    setIsPublic(isPublic);
    if (!isPublic && !roomCode) {
      generateRoomCode();
    }
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const categories = formData.getAll("categories") as string[];

    // Validate options
    const validOptions = options.filter((option) => option.text.trim());
    if (validOptions.length < 2) {
      setError("Please provide at least 2 options");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/polls", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          isPublic,
          roomCode: isPublic ? null : roomCode,
          options: validOptions.map((option) => option.text),
          categories,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to create poll");
      }

      const { poll } = await response.json();
      router.push(`/polls/${poll.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  if (!user) {
    router.push("/signin");
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Create a New Poll</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Poll Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Options</label>
          <div className="space-y-2">
            {options.map((option) => (
              <div key={option.id} className="flex gap-2">
                <input
                  type="text"
                  value={option.text}
                  onChange={(e) => updateOption(option.id, e.target.value)}
                  placeholder={`Option ${options.indexOf(option) + 1}`}
                  className="flex-1 px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {options.length > 2 && (
                  <button
                    type="button"
                    onClick={() => removeOption(option.id)}
                    className="px-3 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={addOption}
            className="mt-2 text-sm text-blue-600 hover:text-blue-500"
          >
            + Add Option
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Privacy</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="isPublic"
                value="true"
                defaultChecked
                className="mr-2"
                onChange={handlePublicChange}
              />
              Public
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="isPublic"
                value="false"
                className="mr-2"
                onChange={handlePublicChange}
              />
              Private
            </label>
          </div>
          {!isPublic && roomCode && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                Share this code with participants:{" "}
                <span className="font-mono font-bold">{roomCode}</span>
              </p>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Categories</label>
          <div className="flex flex-wrap gap-2">
            {["Technology", "Sports", "Politics", "Entertainment", "Other"].map(
              (category) => (
                <label key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    name="categories"
                    value={category}
                    className="mr-2"
                  />
                  {category}
                </label>
              )
            )}
          </div>
        </div>

        {error && <div className="text-red-500 text-sm">{error}</div>}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Poll"}
        </button>
      </form>
    </div>
  );
}
