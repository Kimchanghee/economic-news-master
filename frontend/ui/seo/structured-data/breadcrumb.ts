import type { BreadcrumbList } from "./types";

/**
 * Generate breadcrumb structured data
 */
export function getBreadcrumbSchema(
  items: Array<{ name: string; url?: string }>
): BreadcrumbList {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
}

