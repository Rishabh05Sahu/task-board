"use client";

import { useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

export default function TaskForm({ onTaskCreated }: { onTaskCreated: () => void }) {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title) return;

    setLoading(true);

    await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        status: "TODO",
      }),
    });

    setTitle("");
    setLoading(false);
    onTaskCreated();
  };

  return (
    <div className="flex gap-2 mb-4">
      <Input
        placeholder="Enter task title..."
        value={title}
        onChange={(e:any) => setTitle(e.target.value)}
      />
      <Button onClick={handleSubmit} disabled={loading}>
        {loading ? "Creating..." : "Add"}
      </Button>
    </div>
  );
}
