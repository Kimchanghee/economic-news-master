import type { MetadataRoute } from "next";

import { SUPPORTED_LANGS } from "./[lang]/locales";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://econnews.example.com";

const ALLOW_PATHS = [
  "/",
  "/news",
  "/news/",
  ...SUPPORTED_LANGS.map((lang) => `/${lang}`),
  ...SUPPORTED_LANGS.map((lang) => `/${lang}/`),
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Rules for all search engines and AI crawlers
      {
        userAgent: "*",
        allow: ALLOW_PATHS,
        disallow: ["/admin", "/admin/", "/api/"],
      },
      // Specific rules for OpenAI GPTBot (ChatGPT)
      {
        userAgent: "GPTBot",
        allow: ["/", "/news", ...SUPPORTED_LANGS.map((lang) => `/${lang}`)],
        disallow: ["/admin"],
      },
      // Specific rules for Google's AI (Gemini)
      {
        userAgent: "Google-Extended",
        allow: ["/", "/news", ...SUPPORTED_LANGS.map((lang) => `/${lang}`)],
        disallow: ["/admin"],
      },
      // Anthropic Claude Bot
      {
        userAgent: "anthropic-ai",
        allow: ["/", "/news", ...SUPPORTED_LANGS.map((lang) => `/${lang}`)],
        disallow: ["/admin"],
      },
      // Common AI/LLM crawlers
      {
        userAgent: "CCBot",
        allow: ["/", "/news", ...SUPPORTED_LANGS.map((lang) => `/${lang}`)],
        disallow: ["/admin"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
