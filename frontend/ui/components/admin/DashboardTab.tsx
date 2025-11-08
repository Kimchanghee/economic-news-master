import { BarChart3, Globe2, Newspaper, ShieldCheck } from "lucide-react";
import { StatCard } from "./StatCard";
import { CategoryDistribution } from "./CategoryDistribution";
import { CollectButton } from "./CollectButton";
import { CollectionLogsTable } from "./CollectionLogsTable";

type DashboardStats = {
  total: number;
  categories: Record<string, number>;
  latest_published_at?: string | null;
};

type DashboardResponse = {
  stats: DashboardStats;
  recent_logs: Array<{
    id: string;
    executed_at: string;
    total_collected: number;
    language: string;
    operator: string;
  }>;
};

type DashboardTabProps = {
  dashboard?: DashboardResponse;
  onCollect: () => void;
};

export function DashboardTab({ dashboard, onCollect }: DashboardTabProps) {
  const stats = dashboard?.stats;
  const logs = dashboard?.recent_logs ?? [];

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="전체 기사"
          value={stats?.total ?? 0}
          icon={<Newspaper className="text-blue-600" size={20} />}
          tone="blue"
        />
        <StatCard
          title="금일 수집량"
          value={logs[0]?.total_collected ?? 0}
          icon={<BarChart3 className="text-emerald-600" size={20} />}
          tone="green"
        />
        <StatCard
          title="카테고리"
          value={stats ? Object.keys(stats.categories ?? {}).length : 0}
          icon={<Globe2 className="text-purple-600" size={20} />}
          tone="purple"
        />
        <StatCard
          title="상태"
          value="정상 운영"
          icon={<ShieldCheck className="text-emerald-600" size={20} />}
          tone="green"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 lg:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">카테고리 분포</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">최근 수집된 기사 기준</p>
            </div>
          </div>
          <CategoryDistribution categories={stats?.categories ?? {}} />
        </div>
        <CollectButton onCollect={onCollect} />
      </div>

      <CollectionLogsTable logs={logs} />
    </div>
  );
}
