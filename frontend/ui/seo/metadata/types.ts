/**
 * SEO Metadata Types
 * 각 언어별 SEO 메타데이터 타입 정의
 */

export interface LocaleSEO {
  // Basic Meta Tags
  title: string;
  description: string;
  keywords: string[];

  // Open Graph
  ogTitle: string;
  ogDescription: string;
  ogType: string;
  ogImage: string;
  ogUrl: string;
  ogSiteName: string;

  // Twitter Card
  twitterCard: "summary" | "summary_large_image" | "app" | "player";
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  twitterSite?: string;
  twitterCreator?: string;

  // Additional SEO
  canonical: string;
  robots: string;
  author: string;
  publisher: string;
  
  // Language & Region
  language: string;
  locale: string;
  alternateLocales: string[];
}

export interface CategorySEO {
  [category: string]: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface NewsArticleSEO {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image: string;
  articleSection: string;
  keywords: string[];
}

