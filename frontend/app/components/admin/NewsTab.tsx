import { NewsManagementTable } from "./NewsManagementTable";

type NewsItem = {
  id: string;
  title: string;
  source: string;
  category: string;
  views: number;
  likes: number;
  published_at: string;
};

type NewsResponse = {
  items: NewsItem[];
  total: number;
};

type NewsTabProps = {
  news?: NewsResponse;
  onDelete: (id: string) => void;
};

export function NewsTab({ news, onDelete }: NewsTabProps) {
  const items = news?.items ?? [];
  return <NewsManagementTable items={items} onDelete={onDelete} />;
}

