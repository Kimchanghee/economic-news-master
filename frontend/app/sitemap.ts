import type { MetadataRoute } from "next";

import { SUPPORTED_LANGS } from "./[lang]/locales";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://econnews.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Main pages
  const pages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "hourly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/news`,
      lastModified: now,
      changeFrequency: "hourly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/admin`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.4,
    },
  ];

  // Localized landing pages
  const localizedPages = SUPPORTED_LANGS.map<MetadataRoute.Sitemap[number]>((lang) => ({
    url: `${SITE_URL}/${lang}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.8,
    alternates: {
      languages: Object.fromEntries(
        SUPPORTED_LANGS.map((l) => [l, `${SITE_URL}/${l}`])
      ),
    },
  }));

  // TODO: Add dynamic news article URLs
  // When implementing, fetch actual news articles from your API/database
  // Example:
  // const newsArticles = await fetchNewsArticles();
  // const newsPages = newsArticles.map(article => ({
  //   url: `${SITE_URL}/news/${article.id}`,
  //   lastModified: new Date(article.updatedAt),
  //   changeFrequency: 'daily',
  //   priority: 0.7,
  // }));

  return [...pages, ...localizedPages];
}
