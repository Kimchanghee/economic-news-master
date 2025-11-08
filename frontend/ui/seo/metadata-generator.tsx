/**
 * Next.js Metadata Generator
 * SEO 및 AEO를 위한 메타데이터 생성
 */

import type { Metadata } from "next";
import { getSEOMetadata, getCategorySEO } from "./metadata";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://economic-news.com";

/**
 * Generate metadata for main page
 */
export function generateMainMetadata(lang: string, category?: string): Metadata {
  const seo = getSEOMetadata(lang);
  const categorySEO = category ? getCategorySEO(lang, category) : null;

  const title = categorySEO ? categorySEO.title : seo.title;
  const description = categorySEO ? categorySEO.description : seo.description;
  const keywords = categorySEO ? categorySEO.keywords : seo.keywords;

  const url = category
    ? `${BASE_URL}/${lang}?category=${category}`
    : `${BASE_URL}/${lang}`;

  return {
    title,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: seo.author }],
    creator: seo.author,
    publisher: seo.publisher,
    robots: seo.robots,
    alternates: {
      canonical: url,
      languages: seo.alternateLocales.reduce((acc, locale) => {
        const langCode = locale.split("_")[0];
        acc[langCode] = `${BASE_URL}/${langCode}`;
        return acc;
      }, {} as Record<string, string>),
    },
    openGraph: {
      type: seo.ogType as any,
      title: title,
      description: description,
      url: url,
      siteName: seo.ogSiteName,
      images: [
        {
          url: seo.ogImage,
          alt: title,
        },
      ],
      locale: seo.locale,
      alternateLocale: seo.alternateLocales,
    },
    twitter: {
      card: seo.twitterCard,
      title: title,
      description: description,
      images: [seo.twitterImage],
      ...(seo.twitterSite && { site: seo.twitterSite }),
      ...(seo.twitterCreator && { creator: seo.twitterCreator }),
    },
    metadataBase: new URL(BASE_URL),
  };
}

/**
 * Generate metadata for news article
 */
export function generateArticleMetadata(
  lang: string,
  article: {
    title: string;
    description: string;
    image?: string;
    publishedAt: string;
    category?: string;
  }
): Metadata {
  const seo = getSEOMetadata(lang);
  const url = `${BASE_URL}/${lang}/article/${article.title.replace(/\s+/g, "-").toLowerCase()}`;

  return {
    title: article.title,
    description: article.description,
    authors: [{ name: seo.author }],
    publisher: seo.publisher,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: url,
      siteName: seo.ogSiteName,
      images: article.image ? [{ url: article.image, alt: article.title }] : [],
      publishedTime: article.publishedAt,
      locale: seo.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: article.image ? [article.image] : [],
    },
    alternates: {
      canonical: url,
    },
    metadataBase: new URL(BASE_URL),
  };
}

