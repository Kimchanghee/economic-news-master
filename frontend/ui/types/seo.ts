/**
 * Enhanced SEO Types for AEO (Answer Engine Optimization) and Traditional SEO
 * Optimized for 2024 search engines, AI assistants, and social media
 */

export type OpenGraphType = "website" | "article" | "profile" | "book";

export type TwitterCardType = "summary" | "summary_large_image" | "app" | "player";

/**
 * JSON-LD Schema.org types for structured data
 */
export interface Organization {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs: string[];
  contactPoint?: {
    "@type": "ContactPoint";
    telephone?: string;
    contactType: string;
    email?: string;
    availableLanguage: string[];
  };
}

export interface NewsArticle {
  "@context": "https://schema.org";
  "@type": "NewsArticle";
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: {
    "@type": "Organization";
    name: string;
  };
  publisher: {
    "@type": "Organization";
    name: string;
    logo: {
      "@type": "ImageObject";
      url: string;
    };
  };
  articleSection?: string;
  keywords?: string[];
  inLanguage: string;
}

export interface WebPage {
  "@context": "https://schema.org";
  "@type": "WebPage";
  name: string;
  description: string;
  url: string;
  inLanguage: string;
  isPartOf: {
    "@type": "WebSite";
    name: string;
    url: string;
  };
  about?: {
    "@type": "Thing";
    name: string;
  };
  breadcrumb?: {
    "@type": "BreadcrumbList";
    itemListElement: Array<{
      "@type": "ListItem";
      position: number;
      name: string;
      item: string;
    }>;
  };
}

export interface FAQPage {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
}

/**
 * Complete SEO metadata for a page
 */
export interface SEOMetadata {
  // Basic SEO
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  robots?: string; // e.g., "index, follow"
  
  // Language and locale
  locale: string;
  alternateLocales?: Array<{
    lang: string;
    href: string;
  }>;
  
  // Open Graph (Facebook, LinkedIn, etc.)
  og: {
    type: OpenGraphType;
    title: string;
    description: string;
    url: string;
    image: string;
    imageAlt: string;
    siteName: string;
    locale: string;
  };
  
  // Twitter Card
  twitter: {
    card: TwitterCardType;
    site?: string; // @username
    creator?: string; // @username
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  
  // JSON-LD Structured Data
  jsonLd: {
    organization?: Organization;
    webpage?: WebPage;
    faqPage?: FAQPage;
    newsArticle?: NewsArticle;
  };
  
  // Additional metadata for AEO
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

/**
 * Configuration for generating SEO metadata
 */
export interface SEOConfig {
  baseUrl: string;
  siteName: string;
  defaultImage: string;
  twitterHandle?: string;
  organizationName: string;
  organizationLogo: string;
  socialLinks: string[];
}

