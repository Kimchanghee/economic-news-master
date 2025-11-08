/**
 * Sitemap generator for Next.js
 * 다국어 지원 및 동적 콘텐츠 포함
 */

import { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://economic-news.com'

const LANGUAGES = [
  'en', 'ko', 'ja', 'zh', 'es', 'fr', 'de', 'it', 'pt', 'ru',
  'ar', 'hi', 'id', 'vi', 'th', 'nl', 'sv', 'pl', 'tr', 'el'
]

const CATEGORIES = [
  'all', 'business', 'finance', 'technology', 
  'crypto', 'markets', 'economy', 'global'
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  
  // Main pages for each language
  const languagePages: MetadataRoute.Sitemap = LANGUAGES.map((lang) => ({
    url: `${BASE_URL}/${lang}`,
    lastModified: now,
    changeFrequency: 'hourly',
    priority: 1.0,
  }))

  // Category pages for each language
  const categoryPages: MetadataRoute.Sitemap = []
  for (const lang of LANGUAGES) {
    for (const category of CATEGORIES) {
      if (category !== 'all') {
        categoryPages.push({
          url: `${BASE_URL}/${lang}?category=${category}`,
          lastModified: now,
          changeFrequency: 'hourly',
          priority: 0.9,
        })
      }
    }
  }

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/admin`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]

  return [...staticPages, ...languagePages, ...categoryPages]
}
