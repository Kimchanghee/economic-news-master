"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/ui/providers/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="테마 전환"
      className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 shadow-sm transition hover:bg-white dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      {isDark ? "라이트 모드" : "다크 모드"}
    </button>
  );
}
