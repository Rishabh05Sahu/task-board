"use client";

import { useState } from "react";

const statusStyles: Record<string, string> = {
  TODO:
    "bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200",

  IN_PROGRESS:
    "bg-blue-600 text-white dark:bg-blue-500 dark:text-white",

  DONE:
    "bg-emerald-600 text-white dark:bg-emerald-500 dark:text-white",
};


export default function TaskItem({
  task,
  onStatusChange,
}: {
  task: any;
  onStatusChange: () => void;
}) {
  const [loading, setLoading] = useState(false);

  const handleChange = async (status: string) => {
    setLoading(true);

    await fetch(`/api/tasks/${task.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    setLoading(false);
    onStatusChange();
  };

  return (
    <div
      className="
        group
        flex items-center justify-between
        rounded-xl
        border border-[color:var(--border)]
        bg-[color:var(--surface)]
        px-4 py-3
        transition
        hover:border-[color:var(--accent)]
        hover:shadow-sm
      "
    >
      <div className="flex flex-col">
        <span className="text-sm font-medium">
          {task.title}
        </span>

        <span className="text-xs text-[color:var(--text-muted)] mt-0.5">
          Created just now
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span
          className={`
            text-xs font-medium px-2.5 py-1 rounded-full
            ${statusStyles[task.status]}
          `}
        >
          {task.status.replace("_", " ")}
        </span>

        <select
          value={task.status}
          onChange={(e) => handleChange(e.target.value)}
          disabled={loading}
          className="
            text-xs
            border border-[color:var(--border)]
            bg-[color:var(--surface)]
            rounded-md
            px-2 py-1
            focus:outline-none
            focus:ring-2
            focus:ring-[color:var(--accent)]
          "
        >
          <option value="TODO">Todo</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="DONE">Done</option>
        </select>
      </div>
    </div>
  );
}
