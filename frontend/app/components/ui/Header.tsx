import { LogIn } from "lucide-react";
import { LanguagePicker } from "@/ui/components/common/LanguagePicker";

type HeaderProps = {
  language: string;
  setLanguage: (lang: string) => void;
};

export function Header({ language, setLanguage }: HeaderProps) {
  return (
    <header className="sticky top-4 z-30 rounded-3xl border border-blue-500/20 bg-slate-900/70 p-6 backdrop-blur">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1 text-sm text-blue-300">
            <span>💰</span>
            <span className="font-semibold tracking-wide">EconNews</span>
            <span className="text-blue-200">실시간 경제 뉴스</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            글로벌 경제를 한눈에.
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            맞춤형 카테고리, 언어 필터, 인터랙티브 카드 UI로 경제 뉴스를 탐색하세요.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <LanguagePicker value={language} onChange={setLanguage} />
          <a
            href="/admin"
            className="focus-ring inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
          >
            <LogIn size={18} />
            관리자 로그인
          </a>
        </div>
      </div>
    </header>
  );
}

