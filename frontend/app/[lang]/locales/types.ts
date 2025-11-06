export type Section = {
  title: string;
  body: string;
  bullets: string[];
};

export type FAQ = {
  question: string;
  answer: string;
};

export type SeoContent = {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  locale: string;
};

export type AeoContent = {
  heroTitle: string;
  heroSubtitle: string;
  ctaLabel: string;
  valuePropsTitle: string;
  sections: Section[];
  faqs: FAQ[];
};

export type LocaleContent = {
  seo: SeoContent;
  aeo: AeoContent;
};
