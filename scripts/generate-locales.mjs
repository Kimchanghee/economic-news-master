import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const BASE_DIR = resolve("frontend", "app", "[lang]", "locales");

const baseContent = {
  seo: {
    metaTitle: "EconNews Global Economic News | Real-time Market Intelligence in 20 Languages",
    metaDescription:
      "EconNews delivers localized market briefs, structured data, and voice-search-ready answers across 20 languages. Track equities, crypto, macroeconomics, technology, corporate and forex headlines with hreflang and schema baked in.",
    keywords: [
      "global economic news",
      "multilingual market insights",
      "finance voice search answers",
      "international SEO dashboard",
      "answer engine optimization",
    ],
    locale: "en_US",
  },
  aeo: {
    heroTitle: "Answer Engine Optimized Economic News for Global Teams",
    heroSubtitle:
      "Combine curated feeds, voice-search-ready FAQs, and structured metadata to earn featured answers across 20 locales.",
    ctaLabel: "Open the live market dashboard",
    valuePropsTitle: "Why EconNews wins featured answers",
    sections: [
      {
        title: "Voice and Answer Engine Optimization by Design",
        body:
          "Every story ships with conversational summaries, FAQ schema, and JSON-LD blocks so answer engines, voice assistants, and AI overviews highlight your briefings first.",
        bullets: [
          "Conversational, intent-matched summaries built for voice results",
          "Entity, sector, and sentiment tagging aligned with schema.org",
          "Automated FAQ and HowTo markup to capture featured snippets",
        ],
      },
      {
        title: "Localized Intelligence in 20 Languages",
        body:
          "Localized headlines, hreflang mapping, and keyword research keep cross-border stakeholders informed without losing nuance.",
        bullets: [
          "Culturally relevant keywords and CTAs per locale",
          "Consistent taxonomy for comparing markets worldwide",
          "Region-specific support and compliance messaging",
        ],
      },
      {
        title: "Workflow Automation and Governance",
        body:
          "Integrate EconNews into your stack with authenticated APIs, admin approvals, and transparent ingestion logs.",
        bullets: [
          "Schedule or trigger collections with rubric-level controls",
          "Engagement metrics surface stories worth amplifying",
          "JSON exports plug into BI and risk dashboards",
        ],
      },
    ],
    faqs: [
      {
        question: "How does EconNews keep financial briefs optimized for answer engines?",
        answer:
          "We structure each update with conversational language, schema.org markup, and localized keywords so voice assistants and AI summaries surface the right answer in seconds.",
      },
      {
        question: "Which markets and asset classes does EconNews monitor daily?",
        answer:
          "Follow equities, crypto, macroeconomic indicators, technology, corporate developments, and forex with filters for each region.",
      },
      {
        question: "Can EconNews integrate with our existing research or newsroom tools?",
        answer:
          "Yes. Secure FastAPI endpoints let you fetch news, engagement signals, and automation triggers directly into your workflow.",
      },
    ],
  },
};

const languages = [
  { key: "en", target: "en", locale: "en_US" },
  { key: "ko", target: "ko", locale: "ko_KR" },
  { key: "ja", target: "ja", locale: "ja_JP" },
  { key: "zh", target: "zh-CN", locale: "zh_CN" },
  { key: "es", target: "es", locale: "es_ES" },
  { key: "fr", target: "fr", locale: "fr_FR" },
  { key: "de", target: "de", locale: "de_DE" },
  { key: "it", target: "it", locale: "it_IT" },
  { key: "pt", target: "pt-BR", locale: "pt_BR" },
  { key: "ru", target: "ru", locale: "ru_RU" },
  { key: "ar", target: "ar", locale: "ar_SA" },
  { key: "hi", target: "hi", locale: "hi_IN" },
  { key: "id", target: "id", locale: "id_ID" },
  { key: "vi", target: "vi", locale: "vi_VN" },
  { key: "th", target: "th", locale: "th_TH" },
  { key: "nl", target: "nl", locale: "nl_NL" },
  { key: "sv", target: "sv", locale: "sv_SE" },
  { key: "pl", target: "pl", locale: "pl_PL" },
  { key: "tr", target: "tr", locale: "tr_TR" },
  { key: "el", target: "el", locale: "el_GR" },
];

async function translateText(text, target) {
  if (!text) return text;
  if (target === "en") return text;

  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${encodeURIComponent(
    target
  )}&dt=t&q=${encodeURIComponent(text)}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to translate text (${response.status}): ${text}`);
  }

  const data = await response.json();
  return data[0].map(([translated]) => translated).join("");
}

async function translateNode(node, target) {
  if (typeof node === "string") {
    return translateText(node, target);
  }
  if (Array.isArray(node)) {
    const results = [];
    for (const item of node) {
      results.push(await translateNode(item, target));
    }
    return results;
  }
  if (node && typeof node === "object") {
    const entries = await Promise.all(
      Object.entries(node).map(async ([key, value]) => {
        if (key === "locale") {
          return [key, value];
        }
        return [key, await translateNode(value, target)];
      })
    );
    return Object.fromEntries(entries);
  }
  return node;
}

function serializeContent(constantName, content) {
  const json = JSON.stringify(content, null, 2)
    .replace(/\"([^"]+)\":/g, (match, key) => `"${key}":`)
    .replace(/\\\\n/g, "\\n");

  return `import { LocaleContent } from "./types";

const ${constantName}: LocaleContent = ${json};

export default ${constantName};
`;
}

async function generateLocaleFiles() {
  for (const lang of languages) {
    const translated = await translateNode(baseContent, lang.target);
    translated.seo.locale = lang.locale;

    const constantName = lang.key;
    const fileContent = serializeContent(constantName, translated);
    const outputPath = resolve(BASE_DIR, `${lang.key}.ts`);
    writeFileSync(outputPath, fileContent, "utf8");
    console.log(`Generated ${lang.key} locale at ${outputPath}`);
  }
}

generateLocaleFiles().catch((error) => {
  console.error(error);
  process.exit(1);
});

