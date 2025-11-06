export type DashboardStats = {
  total: number;
  categories: Record<string, number>;
  latest_published_at?: string | null;
};

export type CollectionLog = {
  id: string;
  executed_at: string;
  total_collected: number;
  language: string;
  operator: string;
};

export type DashboardResponse = {
  stats: DashboardStats;
  recent_logs: CollectionLog[];
};

export type AdminNewsItem = {
  id: string;
  title: string;
  source: string;
  category: string;
  views: number;
  likes: number;
  published_at: string;
};

export type AdminNewsResponse = {
  items: AdminNewsItem[];
  total: number;
};

