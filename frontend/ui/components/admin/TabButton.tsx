import clsx from "clsx";

type TabButtonProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

export function TabButton({ label, active, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-full border px-5 py-2 text-sm font-semibold transition",
        active
          ? "border-slate-900 bg-slate-900 text-white shadow dark:border-white/80"
          : "border-slate-200 bg-white text-slate-500 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300"
      )}
    >
      {label}
    </button>
  );
}
