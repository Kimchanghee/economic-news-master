import clsx from "clsx";

type CategoryDistributionProps = {
  categories: Record<string, number>;
};

export function CategoryDistribution({ categories }: CategoryDistributionProps) {
  const total = Object.values(categories).reduce((acc, count) => acc + count, 0);
  if (total === 0) {
    return <p className="text-sm text-gray-400">데이터가 없습니다.</p>;
  }
  const palette = ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-purple-500", "bg-pink-500", "bg-sky-500"];
  const entries = Object.entries(categories);
  return (
    <div className="space-y-4">
      {entries.map(([category, value], index) => {
        const percent = Math.round((value / total) * 100);
        return (
          <div key={category}>
            <div className="flex items-center justify-between text-xs uppercase text-gray-400">
              <span>{category}</span>
              <span>{percent}%</span>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
              <div
                className={clsx("h-2 rounded-full", palette[index % palette.length])}
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

