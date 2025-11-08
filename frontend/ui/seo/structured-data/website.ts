import type { Website } from "./types";

export function getWebsiteSchema(lang: string): Website {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Economic News",
    url: `https://economic-news.com/${lang}`,
    description: "AI-powered real-time economic news curation in 20 languages",
    inLanguage: [
      "en", "ko", "ja", "zh", "es", "fr", "de", "it", "pt", "ru",
      "ar", "hi", "id", "vi", "th", "nl", "sv", "pl", "tr", "el"
    ],
    publisher: {
      "@type": "Organization",
      name: "Economic News",
      logo: "https://economic-news.com/logo.png",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `https://economic-news.com/${lang}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

