export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  link: string;
  category: string;
  source: string;
  published_at: string;
  language: string;
  image_url?: string | null;
  likes: number;
  views: number;
};

export type NewsResponse = {
  items: NewsItem[];
  total: number;
  language: string;
};

