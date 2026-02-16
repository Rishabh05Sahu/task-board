"use client";

import { useEffect, useState } from "react";
import TaskItem from "../molecules/TaskItem";

export default function TaskList() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    setLoading(true);
    const res = await fetch("/api/tasks");
    const data = await res.json();
    setTasks(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (loading) {
    return (
      <div className="text-sm text-[color:var(--text-muted)]">
        Loading tasks...
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div
        className="
          flex flex-col items-center justify-center
          border border-dashed border-[color:var(--border)]
          rounded-xl
          py-12
          text-center
        "
      >
        <div className="h-10 w-10 rounded-full bg-[color:var(--accent-soft)] flex items-center justify-center text-sm font-semibold text-[color:var(--accent)]">
          +
        </div>

        <h3 className="mt-4 text-sm font-medium">
          No tasks yet
        </h3>

        <p className="mt-1 text-xs text-[color:var(--text-muted)] max-w-xs">
          Create your first task above to start organizing your workflow.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={fetchTasks}
        />
      ))}
    </div>
  );
}
