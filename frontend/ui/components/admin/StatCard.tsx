import clsx from "clsx";

type StatCardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  tone?: "blue" | "green" | "purple" | "amber";
};

const toneStyles: Record<NonNullable<StatCardProps["tone"]>, string> = {
  blue: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-200",
  green: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200",
  purple: "bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-200",
  amber: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-200",
};

export function StatCard({ title, value, icon, tone = "blue" }: StatCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
      <div className={clsx("mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl", toneStyles[tone])}>
        {icon}
      </div>
      <div className="text-sm text-slate-500 dark:text-slate-400">{title}</div>
      <div className="text-2xl font-bold text-slate-900 dark:text-white">{value}</div>
    </div>
  );
}
