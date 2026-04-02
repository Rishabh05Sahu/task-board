"use client";

import { useRouter } from "next/navigation";
import TaskForm from "@/components/molecules/TaskForm";
import TaskList from "@/components/organisms/TaskList";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-[color:var(--border)] bg-[color:var(--surface)]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-tight">Task Board</h1>

          <div className="flex items-center gap-4">
            <ThemeToggle />

            <button
              onClick={handleLogout}
              className="
    bg-transparent
    border border-[color:var(--border)]
    text-sm font-medium
    px-4 py-2
    rounded-lg
    text-[color:var(--text-main)]
    hover:bg-red-50
    hover:text-red-600
    hover:border-red-200
    dark:hover:bg-red-900/30
    transition
  "
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        <div
          className="
            bg-[color:var(--surface)]
            border border-[color:var(--border)]
            rounded-2xl
            p-8
            space-y-8
            shadow-sm
          "
        >
          <div>
            <h2 className="text-xl font-semibold">Your Tasks</h2>
            <p className="text-sm text-[color:var(--text-muted)] mt-1">
              Manage and track your work efficiently.
            </p>
          </div>

          <TaskForm onTaskCreated={() => window.location.reload()} />

          <TaskList />
        </div>
      </main>
    </div>
  );

  
}
