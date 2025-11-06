import { Languages } from "lucide-react";
import { LANG_LABELS } from "@/ui/constants/languages";

type LanguagePickerProps = {
  value: string;
  onChange: (lang: string) => void;
};

export function LanguagePicker({ value, onChange }: LanguagePickerProps) {
  const languages = Object.entries(LANG_LABELS);

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-sm text-slate-200">
      <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wide text-slate-400">
        <Languages size={14} />
        지원 언어
      </div>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-lg bg-slate-900/70 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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

