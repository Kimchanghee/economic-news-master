import type { FAQPage } from "./types";

/**
 * FAQ Structured Data for AEO (Answer Engine Optimization)
 * 각 언어별 자주 묻는 질문
 */

export const faqSchemaByLang: Record<string, FAQPage> = {
  ko: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "경제 뉴스 사이트는 어떤 언어를 지원하나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "20개 언어를 지원합니다: 한국어, 영어, 일본어, 중국어, 스페인어, 프랑스어, 독일어, 이탈리아어, 포르투갈어, 러시아어, 아랍어, 힌디어, 인도네시아어, 베트남어, 태국어, 네덜란드어, 스웨덴어, 폴란드어, 터키어, 그리스어",
        },
      },
      {
        "@type": "Question",
        name: "뉴스는 얼마나 자주 업데이트되나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI 기반 시스템이 24시간 실시간으로 글로벌 경제 뉴스를 수집하고 큐레이션합니다. 주요 경제 이벤트는 발생 즉시 업데이트됩니다.",
        },
      },
      {
        "@type": "Question",
        name: "어떤 카테고리의 뉴스를 제공하나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "비즈니스, 금융, 기술, 암호화폐, 시장, 경제, 글로벌 등 8개 주요 카테고리의 경제 뉴스를 제공합니다.",
        },
      },
      {
        "@type": "Question",
        name: "뉴스 출처는 어디인가요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Reuters, Bloomberg, Financial Times, Wall Street Journal, The Economist 등 신뢰할 수 있는 글로벌 경제 매체에서 뉴스를 수집합니다.",
        },
      },
      {
        "@type": "Question",
        name: "모바일에서도 이용할 수 있나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "네, 반응형 디자인으로 모든 기기(데스크톱, 태블릿, 스마트폰)에서 최적화된 경험을 제공합니다.",
        },
      },
    ],
  },
  en: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What languages does the Economic News site support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We support 20 languages: Korean, English, Japanese, Chinese, Spanish, French, German, Italian, Portuguese, Russian, Arabic, Hindi, Indonesian, Vietnamese, Thai, Dutch, Swedish, Polish, Turkish, and Greek.",
        },
      },
      {
        "@type": "Question",
        name: "How often is the news updated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our AI-powered system collects and curates global economic news 24/7 in real-time. Major economic events are updated immediately as they occur.",
        },
      },
      {
        "@type": "Question",
        name: "What categories of news do you provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide economic news in 8 major categories: Business, Finance, Technology, Cryptocurrency, Markets, Economy, and Global.",
        },
      },
      {
        "@type": "Question",
        name: "What are your news sources?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We collect news from trusted global economic media sources including Reuters, Bloomberg, Financial Times, Wall Street Journal, and The Economist.",
        },
      },
      {
        "@type": "Question",
        name: "Is it available on mobile?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our responsive design provides an optimized experience on all devices (desktop, tablet, smartphone).",
        },
      },
    ],
  },
};

export function getFAQSchema(lang: string): FAQPage {
  return faqSchemaByLang[lang] || faqSchemaByLang.en;
}

