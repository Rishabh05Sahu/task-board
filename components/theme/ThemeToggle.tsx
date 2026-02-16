"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-medium
                 bg-white/80 hover:bg-slate-100 dark:bg-slate-900/80 dark:hover:bg-slate-800
                 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200
                 transition-colors"
      aria-label="Toggle theme"
    >
      <span className="text-lg">
        {theme === "dark" ? "🌙" : "☀️"}
      </span>
      <span>{theme === "dark" ? "Dark" : "Light"} mode</span>
    </button>
  );
}