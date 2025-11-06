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
        "rounded-xl px-5 py-2 text-sm font-semibold transition",
        active ? "bg-gray-900 text-white shadow" : "bg-gray-200 text-gray-600 hover:bg-gray-300"
      )}
    >
      {label}
    </button>
  );
}

