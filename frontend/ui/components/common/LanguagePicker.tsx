import { Languages } from "lucide-react";
import { LANG_LABELS } from "@/ui/constants/languages";

type LanguagePickerProps = {
  value: string;
  onChange: (lang: string) => void;
};

export function LanguagePicker({ value, onChange }: LanguagePickerProps) {
  const languages = Object.entries(LANG_LABELS);

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200">
      <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
        <Languages size={14} />
        Edition
      </div>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-slate-200/80 bg-white px-3 py-2 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-900/70 dark:text-white"
      >
        {languages.map(([code, label]) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
