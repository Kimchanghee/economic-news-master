export type NewsItem = {
  id: string;
  title: string;
  title_en?: string;
  title_ko?: string;
  title_ja?: string;
  summary: string;
  summary_en?: string;
  summary_ko?: string;
  summary_ja?: string;
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

