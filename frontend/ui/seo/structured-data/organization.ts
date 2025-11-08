import type { Organization } from "./types";

export const organizationSchema: Organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Economic News",
  url: "https://economic-news.com",
  logo: "https://economic-news.com/logo.png",
  sameAs: [
    "https://twitter.com/economicnews",
    "https://facebook.com/economicnews",
    "https://linkedin.com/company/economicnews",
    "https://instagram.com/economicnews",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@economic-news.com",
    contactType: "customer service",
  },
};

