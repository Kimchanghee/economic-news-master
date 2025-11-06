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
          title="전체 뉴스"
          value={stats?.total ?? 0}
          icon={<Newspaper className="text-blue-600" size={20} />}
          accent="bg-blue-100"
        />
        <StatCard
          title="오늘 수집"
          value={logs[0]?.total_collected ?? 0}
          icon={<BarChart3 className="text-green-600" size={20} />}
          accent="bg-green-100"
        />
        <StatCard
          title="카테고리 수"
          value={stats ? Object.keys(stats.categories ?? {}).length : 0}
          icon={<Globe2 className="text-purple-600" size={20} />}
          accent="bg-purple-100"
        />
        <StatCard
          title="상태"
          value="✅ 활성"
          icon={<ShieldCheck className="text-green-600" size={20} />}
          accent="bg-green-100"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="rounded-2xl bg-white p-6 shadow lg:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">카테고리 분포</h3>
          </div>
          <CategoryDistribution categories={stats?.categories ?? {}} />
        </div>
        <CollectButton onCollect={onCollect} />
      </div>

      <CollectionLogsTable logs={logs} />
    </div>
  );
}

