export type Section = {
  title: string;
  body: string;
  bullets: string[];
};

export type FAQ = {
  question: string;
  answer: string;
};

export type LocaleContent = {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  locale: string;
  heroTitle: string;
  heroSubtitle: string;
  ctaLabel: string;
  valuePropsTitle: string;
  sections: Section[];
  faqs: FAQ[];
};
