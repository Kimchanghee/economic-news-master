import clsx from "clsx";
import { CATEGORIES } from "@/ui/constants/categories";

type CategoryFilterProps = {
  active: string;
  onChange: (value: string) => void;
};

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {CATEGORIES.map((category) => {
        const isActive = active === category.id;
        return (
          <button
            key={category.id}
            onClick={() => onChange(category.id)}
            className={clsx(
              "focus-ring inline-flex min-w-[100px] items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition",
              isActive
                ? "border-blue-600 bg-blue-600 text-white shadow"
                : "border-slate-200/80 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-blue-500/60"
            )}
          >
            <span>{category.icon}</span>
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
