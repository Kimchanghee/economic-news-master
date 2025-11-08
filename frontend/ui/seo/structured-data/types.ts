/**
 * Structured Data (JSON-LD) Types for AEO
 * Answer Engine Optimization using Schema.org
 */

export interface Organization {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  sameAs: string[];
  contactPoint?: {
    "@type": "ContactPoint";
    email: string;
    contactType: string;
  };
}

export interface Website {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  inLanguage: string[];
  publisher: {
    "@type": "Organization";
    name: string;
    logo: string;
  };
  potentialAction?: {
    "@type": "SearchAction";
    target: string;
    "query-input": string;
  };
}

export interface NewsArticle {
  "@context": "https://schema.org";
  "@type": "NewsArticle";
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: {
    "@type": "Organization" | "Person";
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
  image?: string;
  articleSection?: string;
  keywords?: string[];
  inLanguage?: string;
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

export interface BreadcrumbList {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item?: string;
  }>;
}

export interface CollectionPage {
  "@context": "https://schema.org";
  "@type": "CollectionPage";
  name: string;
  description: string;
  url: string;
  inLanguage: string;
  isPartOf: {
    "@type": "WebSite";
    name: string;
    url: string;
  };
}

