import { LANG_LABELS } from "@/ui/constants/languages";
import { AdminBadge } from "@/ui/components/admin/AdminBadge";

type PageSectionProps = {
  language: string;
  children: React.ReactNode;
};

export function PageSection({ language, children }: PageSectionProps) {
  const editionDate = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  }).format(new Date());

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
            {editionDate} · {LANG_LABELS[language] ?? language} Edition
          </div>
          <h2 className="section-title mt-2">오늘의 주요 경제 뉴스</h2>
          <p className="section-subtitle">
            세계 각지의 편집국이 전송한 브리핑을 한곳에 모았습니다. 중요한 수치와 흐름을 빠르게 훑어보세요.
          </p>
        </div>
        <AdminBadge />
      </div>
      {children}
    </section>
  );
}
