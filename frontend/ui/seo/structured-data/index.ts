/**
 * Structured Data (JSON-LD) Index
 * AEO (Answer Engine Optimization) using Schema.org
 */

export * from "./types";
export { organizationSchema } from "./organization";
export { getWebsiteSchema } from "./website";
export { getFAQSchema } from "./faq";
export { getBreadcrumbSchema } from "./breadcrumb";
export { getNewsArticleSchema } from "./article";

/**
 * Render JSON-LD script tag
 */
export function renderJSONLD(data: any): string {
  return JSON.stringify(data);
}

/**
 * Generate multiple structured data scripts
 */
export function generateStructuredDataScripts(schemas: any[]): string[] {
  return schemas.map((schema) => renderJSONLD(schema));
}

