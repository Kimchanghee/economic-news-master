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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 px-4 py-12 text-slate-100">
      <div className="w-full max-w-md rounded-3xl bg-white/10 p-10 shadow-2xl backdrop-blur">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 text-3xl">
          💰
        </div>
        <h1 className="mb-2 text-center text-3xl font-bold text-white">관리자 로그인</h1>
        <p className="mb-8 text-center text-sm text-blue-100">뉴스 수집과 대시보드를 관리하려면 로그인하세요.</p>
        <form onSubmit={submit} className="space-y-4">
          <label className="block text-sm font-medium text-blue-100">
            이메일
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-blue-100/60 focus:border-blue-300 focus:outline-none"
            />
          </label>
          <label className="block text-sm font-medium text-blue-100">
            비밀번호
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-blue-100/60 focus:border-blue-300 focus:outline-none"
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="focus-ring flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "로그인 중..." : "로그인"}
          </button>
        </form>
      </div>
    </div>
  );
}

