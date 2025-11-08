import clsx from "clsx";

type CategoryDistributionProps = {
  categories: Record<string, number>;
};

const palette = ["bg-blue-500", "bg-emerald-500", "bg-orange-500", "bg-purple-500", "bg-pink-500", "bg-sky-500"];

export function CategoryDistribution({ categories }: CategoryDistributionProps) {
  const total = Object.values(categories).reduce((acc, count) => acc + count, 0);

  if (total === 0) {
    return <p className="text-sm text-slate-400 dark:text-slate-500">수집된 데이터가 없습니다.</p>;
  }

  return (
    <div className="space-y-4">
      {Object.entries(categories).map(([category, value], index) => {
        const percent = Math.round((value / total) * 100);
        return (
          <div key={category}>
            <div className="flex items-center justify-between text-xs uppercase text-slate-400 dark:text-slate-500">
              <span>{category}</span>
              <span>{percent}%</span>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800">
              <div className={clsx("h-2 rounded-full", palette[index % palette.length])} style={{ width: `${percent}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
