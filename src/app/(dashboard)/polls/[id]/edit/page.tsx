"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/LoadingSpinner";

type Option = {
  id: string;
  text: string;
};

type Category = {
  id: string;
  name: string;
};

export default function EditPoll({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [pollId, setPollId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [roomCode, setRoomCode] = useState("");
  const [status, setStatus] = useState<"ACTIVE" | "CLOSED">("ACTIVE");
  const [options, setOptions] = useState<Option[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [availableCategories, setAvailableCategories] = useState<Category[]>(
    []
  );

  useEffect(() => {
    async function fetchPoll() {
      try {
        const resolvedId = await params.id;
        setPollId(resolvedId);
        const response = await fetch(`/api/polls/${resolvedId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch poll");
        }
        const poll = await response.json();

        setTitle(poll.title);
        setDescription(poll.description || "");
        setIsPublic(poll.isPublic);
        setRoomCode(poll.roomCode || "");
        setStatus(poll.status);
        setOptions(
          poll.options.map((opt: any) => ({
            id: opt.id,
            text: opt.text,
          }))
        );
        setCategories(poll.categories.map((pc: any) => pc.category.id));

        // Fetch available categories
        const catResponse = await fetch("/api/categories");
        if (catResponse.ok) {
          const cats = await catResponse.json();
          setAvailableCategories(cats);
        }

        setLoading(false);
      } catch (err) {
        setError("Failed to load poll");
        setLoading(false);
      }
    }
    fetchPoll();
  }, [params.id]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    // Validate options
    const validOptions = options.filter((option) => option.text.trim());
    if (validOptions.length < 2) {
      setError("Please add at least two options");
      setSaving(false);
      return;
    }

    try {
      const response = await fetch(`/api/polls/${pollId}`, {
        method: "PUT",
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
          status,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update poll");
      }

      router.push(`/polls/${pollId}`);
    } catch (err) {
      setError("Failed to update poll");
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Edit Poll
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 dark:text-white">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 dark:text-white">
            Description (Optional)
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 dark:text-white">
            Options
          </label>
          <div className="space-y-2">
            {options.map((option) => (
              <div key={option.id} className="flex gap-2">
                <input
                  type="text"
                  value={option.text}
                  onChange={(e) => updateOption(option.id, e.target.value)}
                  className="flex-1 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                  placeholder="Enter an option"
                  required
                />
                {options.length > 2 && (
                  <button
                    type="button"
                    onClick={() => removeOption(option.id)}
                    className="px-3 py-2 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
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
            className="mt-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            + Add Option
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 dark:text-white">
            Categories
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {availableCategories.map((category) => (
              <label key={category.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={categories.includes(category.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setCategories([...categories, category.id]);
                    } else {
                      setCategories(
                        categories.filter((id) => id !== category.id)
                      );
                    }
                  }}
                  className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700 dark:text-gray-300">
                  {category.name}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 dark:text-white">
            Privacy
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                checked={isPublic}
                onChange={() => setIsPublic(true)}
                className="mr-2"
              />
              <span className="dark:text-white">Public</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={!isPublic}
                onChange={() => setIsPublic(false)}
                className="mr-2"
              />
              <span className="dark:text-white">Private</span>
            </label>
          </div>
          {!isPublic && (
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Poll Code:{" "}
                <span className="font-mono font-bold">{roomCode}</span>
              </p>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 dark:text-white">
            Poll Status
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                checked={status === "ACTIVE"}
                onChange={() => setStatus("ACTIVE")}
                className="mr-2"
              />
              <span className="dark:text-white">Active</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={status === "CLOSED"}
                onChange={() => setStatus("CLOSED")}
                className="mr-2"
              />
              <span className="dark:text-white">Closed</span>
            </label>
          </div>
          {status === "CLOSED" && (
            <div className="mt-2 text-sm text-yellow-600 dark:text-yellow-400">
              Note: Closed polls cannot receive new votes
            </div>
          )}
        </div>

        {error && <div className="text-red-500 text-sm">{error}</div>}

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
