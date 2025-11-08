import type { NewsArticle } from "./types";

/**
 * Generate NewsArticle structured data
 */
export function getNewsArticleSchema(data: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  category?: string;
  keywords?: string[];
  lang?: string;
}): NewsArticle {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: data.headline,
    description: data.description,
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    author: {
      "@type": "Organization",
      name: "Economic News Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Economic News",
      logo: {
        "@type": "ImageObject",
        url: "https://economic-news.com/logo.png",
      },
    },
    ...(data.image && { image: data.image }),
    ...(data.category && { articleSection: data.category }),
    ...(data.keywords && { keywords: data.keywords }),
    ...(data.lang && { inLanguage: data.lang }),
  };
}

