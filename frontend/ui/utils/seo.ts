import { SEOMetadata, SEOConfig, Organization, WebPage, FAQPage } from "@/ui/types/seo";
import { LocaleContent } from "@/app/[lang]/locales/types";
import { SUPPORTED_LANGS } from "@/app/[lang]/locales";

/**
 * Default SEO configuration
 */
export const DEFAULT_SEO_CONFIG: SEOConfig = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://econnews.dev",
  siteName: "EconNews",
  defaultImage: "/images/og-default.jpg",
  twitterHandle: "@EconNews",
  organizationName: "EconNews",
  organizationLogo: "/images/logo.png",
  socialLinks: [
    "https://twitter.com/econnews",
    "https://linkedin.com/company/econnews",
    "https://github.com/econnews",
  ],
};

/**
 * Generate Organization JSON-LD
 */
export function generateOrganizationJsonLd(config: SEOConfig, locale: LocaleContent): Organization {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: config.organizationName,
    url: config.baseUrl,
    logo: `${config.baseUrl}${config.organizationLogo}`,
    description: locale.seo.metaDescription,
    sameAs: config.socialLinks,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "support@econnews.dev",
      availableLanguage: SUPPORTED_LANGS,
    },
  };
}

/**
 * Generate WebPage JSON-LD
 */
export function generateWebPageJsonLd(
  config: SEOConfig,
  locale: LocaleContent,
  lang: string,
  path: string = "/"
): WebPage {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: locale.seo.metaTitle,
    description: locale.seo.metaDescription,
    url: `${config.baseUrl}/${lang}${path}`,
    inLanguage: lang,
    isPartOf: {
      "@type": "WebSite",
      name: config.siteName,
      url: config.baseUrl,
    },
    about: {
      "@type": "Thing",
      name: "Economic News and Market Intelligence",
    },
  };
}

/**
 * Generate FAQPage JSON-LD
 */
export function generateFAQPageJsonLd(locale: LocaleContent): FAQPage {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: locale.aeo.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate alternate locale links for hreflang
 */
export function generateAlternateLocales(config: SEOConfig, path: string = "/"): Array<{ lang: string; href: string }> {
  return SUPPORTED_LANGS.map((lang) => ({
    lang,
    href: `${config.baseUrl}/${lang}${path}`,
  }));
}

/**
 * Generate complete SEO metadata for a page
 */
export function generateSEOMetadata(
  locale: LocaleContent,
  lang: string,
  config: SEOConfig = DEFAULT_SEO_CONFIG,
  options?: {
    path?: string;
    image?: string;
    type?: "website" | "article";
    publishedTime?: string;
    modifiedTime?: string;
  }
): SEOMetadata {
  const path = options?.path || "/";
  const canonicalUrl = `${config.baseUrl}/${lang}${path}`;
  const imageUrl = options?.image || `${config.baseUrl}${config.defaultImage}`;
  const type = options?.type || "website";

  return {
    // Basic SEO
    title: locale.seo.metaTitle,
    description: locale.seo.metaDescription,
    keywords: locale.seo.keywords,
    canonical: canonicalUrl,
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    
    // Language and locale
    locale: locale.seo.locale,
    alternateLocales: generateAlternateLocales(config, path),
    
    // Open Graph
    og: {
      type,
      title: locale.seo.metaTitle,
      description: locale.seo.metaDescription,
      url: canonicalUrl,
      image: imageUrl,
      imageAlt: `${config.siteName} - ${locale.aeo.heroTitle}`,
      siteName: config.siteName,
      locale: locale.seo.locale,
    },
    
    // Twitter Card
    twitter: {
      card: "summary_large_image",
      site: config.twitterHandle,
      creator: config.twitterHandle,
      title: locale.seo.metaTitle,
      description: locale.seo.metaDescription,
      image: imageUrl,
      imageAlt: `${config.siteName} - ${locale.aeo.heroTitle}`,
    },
    
    // JSON-LD Structured Data
    jsonLd: {
      organization: generateOrganizationJsonLd(config, locale),
      webpage: generateWebPageJsonLd(config, locale, lang, path),
      faqPage: generateFAQPageJsonLd(locale),
    },
    
    // Additional metadata
    publishedTime: options?.publishedTime,
    modifiedTime: options?.modifiedTime,
    section: "Economic News",
    tags: locale.seo.keywords,
  };
}

/**
 * Generate meta tags as HTML string for server-side rendering
 */
export function generateMetaTags(seo: SEOMetadata): string {
  const tags: string[] = [];

  // Basic meta tags
  tags.push(`<title>${seo.title}</title>`);
  tags.push(`<meta name="description" content="${seo.description}" />`);
  tags.push(`<meta name="keywords" content="${seo.keywords.join(", ")}" />`);
  tags.push(`<link rel="canonical" href="${seo.canonical}" />`);
  if (seo.robots) tags.push(`<meta name="robots" content="${seo.robots}" />`);

  // Open Graph
  tags.push(`<meta property="og:type" content="${seo.og.type}" />`);
  tags.push(`<meta property="og:title" content="${seo.og.title}" />`);
  tags.push(`<meta property="og:description" content="${seo.og.description}" />`);
  tags.push(`<meta property="og:url" content="${seo.og.url}" />`);
  tags.push(`<meta property="og:image" content="${seo.og.image}" />`);
  tags.push(`<meta property="og:image:alt" content="${seo.og.imageAlt}" />`);
  tags.push(`<meta property="og:site_name" content="${seo.og.siteName}" />`);
  tags.push(`<meta property="og:locale" content="${seo.og.locale}" />`);

  // Twitter Card
  tags.push(`<meta name="twitter:card" content="${seo.twitter.card}" />`);
  if (seo.twitter.site) tags.push(`<meta name="twitter:site" content="${seo.twitter.site}" />`);
  if (seo.twitter.creator) tags.push(`<meta name="twitter:creator" content="${seo.twitter.creator}" />`);
  tags.push(`<meta name="twitter:title" content="${seo.twitter.title}" />`);
  tags.push(`<meta name="twitter:description" content="${seo.twitter.description}" />`);
  tags.push(`<meta name="twitter:image" content="${seo.twitter.image}" />`);
  tags.push(`<meta name="twitter:image:alt" content="${seo.twitter.imageAlt}" />`);

  // Alternate locales (hreflang)
  if (seo.alternateLocales) {
    seo.alternateLocales.forEach(({ lang, href }) => {
      tags.push(`<link rel="alternate" hreflang="${lang}" href="${href}" />`);
    });
    tags.push(`<link rel="alternate" hreflang="x-default" href="${seo.alternateLocales[0].href}" />`);
  }

  // JSON-LD
  if (seo.jsonLd.organization) {
    tags.push(`<script type="application/ld+json">${JSON.stringify(seo.jsonLd.organization)}</script>`);
  }
  if (seo.jsonLd.webpage) {
    tags.push(`<script type="application/ld+json">${JSON.stringify(seo.jsonLd.webpage)}</script>`);
  }
  if (seo.jsonLd.faqPage) {
    tags.push(`<script type="application/ld+json">${JSON.stringify(seo.jsonLd.faqPage)}</script>`);
  }

  return tags.join("\n");
}

