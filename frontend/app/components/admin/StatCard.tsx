import clsx from "clsx";

type StatCardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  accent: string;
};

export function StatCard({ title, value, icon, accent }: StatCardProps) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow">
      <div className={clsx("mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full", accent)}>{icon}</div>
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-semibold text-gray-900">{value}</div>
    </div>
  );
}

