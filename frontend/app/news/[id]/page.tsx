import type { Metadata } from "next";
import { notFound } from "next/navigation";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://econnews.example.com";

type NewsItem = {
  id: string;
  title: string;
  summary: string;
  link: string;
  category: string;
  source: string;
  published_at: string;
  language: string;
  image_url?: string | null;
  views: number;
  likes: number;
};

async function fetchNews(id: string): Promise<NewsItem | null> {
  try {
    const response = await fetch(`${API_BASE}/news/${id}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      return null;
    }
    return (await response.json()) as NewsItem;
  } catch (error) {
    console.error("Failed to load news detail", error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const item = await fetchNews(params.id);

  if (!item) {
    return {
      title: "News Not Found",
    };
  }

  return {
    title: item.title,
    description: item.summary,
    keywords: [item.category, "economic news", item.source, "finance"],
    openGraph: {
      title: item.title,
      description: item.summary,
      type: "article",
      publishedTime: item.published_at,
      authors: [item.source],
      url: `${SITE_URL}/news/${item.id}`,
      images: item.image_url
        ? [
            {
              url: item.image_url,
              width: 1200,
              height: 630,
              alt: item.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.summary,
      images: item.image_url ? [item.image_url] : [],
    },
  };
}

export default async function NewsDetailPage({ params }: { params: { id: string } }) {
  const item = await fetchNews(params.id);
  if (!item) {
    notFound();
  }
  const published = new Date(item.published_at);
  const formattedDate = `${published.getFullYear()}.${String(published.getMonth() + 1).padStart(
    2,
    "0"
  )}.${String(published.getDate()).padStart(2, "0")}`;

  // NewsArticle structured data for better SEO and AEO
  const newsArticleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.title,
    description: item.summary,
    image: item.image_url || `${SITE_URL}/og-image.png`,
    datePublished: item.published_at,
    dateModified: item.published_at,
    author: {
      "@type": "Organization",
      name: item.source,
    },
    publisher: {
      "@type": "Organization",
      name: "EconNews",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    url: `${SITE_URL}/news/${item.id}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/news/${item.id}`,
    },
    articleSection: item.category,
    inLanguage: item.language,
    keywords: [item.category, "economic news", item.source],
  };

  // BreadcrumbList structured data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "News",
        item: `${SITE_URL}/news`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: item.title,
        item: `${SITE_URL}/news/${item.id}`,
      },
    ],
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-6 py-16">
      <article className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-10 text-slate-200">
        <header className="space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/20 px-4 py-1 text-sm text-blue-200">
            {item.category.toUpperCase()}
          </span>
          <h1 className="text-4xl font-bold text-white">{item.title}</h1>
          <div className="text-sm text-slate-400">
            {item.source} · {formattedDate}
          </div>
        </header>
        {item.image_url && (
          <div className="overflow-hidden rounded-2xl">
            <img src={item.image_url} alt={item.title} className="h-auto w-full object-cover" />
          </div>
        )}
        <p className="text-lg leading-relaxed text-slate-200">{item.summary}</p>
        <div className="flex items-center gap-4 text-sm text-slate-400">
          <span>조회수 {item.views}</span>
          <span>좋아요 {item.likes}</span>
        </div>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500"
        >
          원문 읽기
        </a>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </div>
  );
}
