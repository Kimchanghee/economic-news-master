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
              "focus-ring inline-flex min-w-[90px] items-center justify-center gap-2 rounded-full px-4 py-2 text-sm transition",
              isActive
                ? "bg-gradient-to-r from-blue-600 to-purple-500 text-white shadow"
                : "bg-slate-800/70 text-slate-300 hover:bg-slate-700/70"
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

