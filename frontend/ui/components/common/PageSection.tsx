import { LANG_LABELS } from "@/app/constants/languages";
import { AdminBadge } from "./AdminBadge";

type PageSectionProps = {
  language: string;
  children: React.ReactNode;
};

export function PageSection({ language, children }: PageSectionProps) {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="section-title">오늘의 경제 헤드라인</h2>
          <p className="section-subtitle">
            전 세계 {LANG_LABELS[language] ?? language} 뉴스 소스를 큐레이션합니다.
          </p>
        </div>
        <AdminBadge />
      </div>
      {children}
    </section>
  );
}

