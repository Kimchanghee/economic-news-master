import { Globe2, LogIn } from "lucide-react";
import { LanguagePicker } from "@/ui/components/common/LanguagePicker";
import { ThemeToggle } from "@/ui/components/common/ThemeToggle";

type HeaderProps = {
  language: string;
  setLanguage: (lang: string) => void;
};

export function Header({ language, setLanguage }: HeaderProps) {
  return (
    <header className="sticky top-4 z-30 rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-xl shadow-slate-200/70 backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/70 dark:shadow-blue-950/30">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-300">
              <Globe2 size={16} />
              Global Edition
            </span>
            <span className="h-4 w-px bg-slate-200 dark:bg-slate-700" />
            <span>Daily Economic Briefing</span>
          </div>
          <div>
            <h1 className="text-4xl font-black leading-snug text-slate-900 dark:text-white">
              세계 주요 경제 헤드라인을 한눈에 확인하세요
            </h1>
            <p className="mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-300">
              글로벌 통합 뉴스룸이 주요 이슈를 한글로 번역해 제공합니다. 카테고리, 언어, 섹션을 조합해 나만의 경제 지면을
              완성해 보세요.
            </p>
          </div>
          <dl className="grid gap-4 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500">Realtime sources</dt>
              <dd className="text-lg font-semibold text-slate-900 dark:text-white">26 publishers</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500">오늘 업데이트</dt>
              <dd className="text-lg font-semibold text-slate-900 dark:text-white">130+ 기사</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500">언어</dt>
              <dd className="text-lg font-semibold text-slate-900 dark:text-white">18개 에디션</dd>
            </div>
          </dl>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <ThemeToggle />
          <LanguagePicker value={language} onChange={setLanguage} />
          <a
            href="/admin"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-blue-600/40 px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 dark:border-blue-400/50 dark:text-blue-200 dark:hover:bg-blue-400/10"
          >
            <LogIn size={18} />
            관리자 로그인
          </a>
        </div>
      </div>
    </header>
  );
}
