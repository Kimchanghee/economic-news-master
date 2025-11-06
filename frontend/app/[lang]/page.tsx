import type { Metadata } from "next";

import {
  LOCALE_CONTENT,
  SUPPORTED_LANGS,
  type LocaleKey,
  getLocaleContent,
} from "./locales";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://econnews.example.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

function getAlternates(current: LocaleKey) {
  const languages = Object.fromEntries(
    SUPPORTED_LANGS.map((lang) => [lang, `${SITE_URL}/${lang}`])
  );
  return {
    canonical: `${SITE_URL}/${current}`,
    languages,
  };
}

export function generateMetadata({ params }: { params: { lang: LocaleKey } }): Metadata {
  const lang = SUPPORTED_LANGS.includes(params.lang) ? params.lang : ("en" as LocaleKey);
  const content = getLocaleContent(lang);
  const { seo } = content;
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    alternates: getAlternates(lang),
    openGraph: {
      title: seo.metaTitle,
      description: seo.metaDescription,
      url: `${SITE_URL}/${lang}`,
      siteName: "EconNews",
      type: "website",
      locale: seo.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.metaTitle,
      description: seo.metaDescription,
    },
  };
}

export default function LocaleLanding({ params }: { params: { lang: LocaleKey } }) {
  const lang = SUPPORTED_LANGS.includes(params.lang) ? params.lang : ("en" as LocaleKey);
  const content = getLocaleContent(lang);
  const { aeo, seo } = content;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: aeo.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-16 sm:px-6 lg:px-8">
      <section className="space-y-5 text-center">
        <p className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-200">
          {aeo.valuePropsTitle}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{aeo.heroTitle}</h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-300">{aeo.heroSubtitle}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            className="focus-ring inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            href="/"
          >
            {aeo.ctaLabel}
          </a>
          <a
            className="focus-ring inline-flex items-center justify-center rounded-2xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-400 hover:text-white"
            href="/admin"
          >
            Admin Console
          </a>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {aeo.sections.map((section) => (
          <article
            key={section.title}
            className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-left text-slate-200 shadow-lg shadow-blue-900/20"
          >
            <h2 className="mb-3 text-xl font-semibold text-white">{section.title}</h2>
            <p className="mb-4 text-sm text-slate-300">{section.body}</p>
            <ul className="space-y-2 text-sm text-slate-300">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-blue-500/20 bg-slate-900/80 p-10 text-left shadow-lg shadow-blue-900/40">
        <h2 className="mb-6 text-2xl font-bold text-white">FAQ</h2>
        <div className="space-y-6">
          {aeo.faqs.map((faq) => (
            <div key={faq.question} className="space-y-2">
              <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
              <p className="text-sm text-slate-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
