"use client";

import { useState } from "react";

type LoginFormProps = {
  onSubmit: (email: string, password: string) => void;
};

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState("admin@yourdomain.com");
  const [password, setPassword] = useState("changeme123");
  const [loading, setLoading] = useState(false);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    await onSubmit(email, password);
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--news-background)] px-4 py-16 dark:bg-[#050915]">
      <div className="grid w-full max-w-5xl gap-10 rounded-[32px] border border-slate-200/70 bg-white/95 p-10 shadow-2xl dark:border-slate-800 dark:bg-slate-900/80 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500">
            Editorial control room
          </p>
          <h1 className="text-3xl font-black leading-tight text-slate-900 dark:text-white">EconNews 관리자 센터</h1>
          <p className="text-sm text-slate-500 dark:text-slate-300">
            편집국 전용 공간입니다. 수집 스케줄을 조정하고 기사 상태를 즉시 모니터링하세요.
          </p>
          <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-300">
            <li>• 다국어 에디션 상태 추적</li>
            <li>• 실시간 수집 로그 및 오류 확인</li>
            <li>• 기사 노출/삭제/핫픽스 처리</li>
          </ul>
        </div>
        <form
          onSubmit={submit}
          className="space-y-4 rounded-[24px] border border-slate-200/80 bg-white/90 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/60"
        >
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
            이메일
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950/50 dark:text-slate-100"
            />
          </label>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
            비밀번호
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950/50 dark:text-slate-100"
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="focus-ring flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "로그인 중..." : "로그인"}
          </button>
        </form>
      </div>
    </div>
  );
}
