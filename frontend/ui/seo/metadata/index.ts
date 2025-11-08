/**
 * SEO Metadata Index
 * 모든 언어별 SEO 메타데이터 Export
 */

import { enSEO, enCategorySEO } from "./en";
import { koSEO, koCategorySEO } from "./ko";
import { jaSEO, jaCategorySEO } from "./ja";
import { zhSEO, zhCategorySEO } from "./zh";
import { esSEO, esCategorySEO } from "./es";
import { frSEO, frCategorySEO } from "./fr";
import { deSEO, deCategorySEO } from "./de";
import { itSEO, itCategorySEO } from "./it";
import { ptSEO, ptCategorySEO } from "./pt";
import { ruSEO, ruCategorySEO } from "./ru";
import { arSEO, arCategorySEO } from "./ar";
import { hiSEO, hiCategorySEO } from "./hi";
import { idSEO, idCategorySEO } from "./id";
import { viSEO, viCategorySEO } from "./vi";
import { thSEO, thCategorySEO } from "./th";
import { nlSEO, nlCategorySEO } from "./nl";
import { svSEO, svCategorySEO } from "./sv";
import { plSEO, plCategorySEO } from "./pl";
import { trSEO, trCategorySEO } from "./tr";
import { elSEO, elCategorySEO } from "./el";
import type { LocaleSEO, CategorySEO } from "./types";

export type { LocaleSEO, CategorySEO, NewsArticleSEO } from "./types";

export const seoMetadata: Record<string, LocaleSEO> = {
  en: enSEO,
  ko: koSEO,
  ja: jaSEO,
  zh: zhSEO,
  es: esSEO,
  fr: frSEO,
  de: deSEO,
  it: itSEO,
  pt: ptSEO,
  ru: ruSEO,
  ar: arSEO,
  hi: hiSEO,
  id: idSEO,
  vi: viSEO,
  th: thSEO,
  nl: nlSEO,
  sv: svSEO,
  pl: plSEO,
  tr: trSEO,
  el: elSEO,
};

export const categorySEO: Record<string, CategorySEO> = {
  en: enCategorySEO,
  ko: koCategorySEO,
  ja: jaCategorySEO,
  zh: zhCategorySEO,
  es: esCategorySEO,
  fr: frCategorySEO,
  de: deCategorySEO,
  it: itCategorySEO,
  pt: ptCategorySEO,
  ru: ruCategorySEO,
  ar: arCategorySEO,
  hi: hiCategorySEO,
  id: idCategorySEO,
  vi: viCategorySEO,
  th: thCategorySEO,
  nl: nlCategorySEO,
  sv: svCategorySEO,
  pl: plCategorySEO,
  tr: trCategorySEO,
  el: elCategorySEO,
};

/**
 * Get SEO metadata for a specific language
 */
export function getSEOMetadata(lang: string): LocaleSEO {
  return seoMetadata[lang] || seoMetadata.en;
}

/**
 * Get category SEO metadata for a specific language
 */
export function getCategorySEO(lang: string, category?: string): CategorySEO[string] {
  const langCategorySEO = categorySEO[lang] || categorySEO.en;
  return category && category in langCategorySEO
    ? langCategorySEO[category]
    : langCategorySEO.all;
}

/**
 * Get all alternate language URLs
 */
export function getAlternateLanguages(baseUrl: string, currentLang: string) {
  const languages = Object.keys(seoMetadata);
  return languages
    .filter((lang) => lang !== currentLang)
    .map((lang) => ({
      hreflang: lang,
      href: `${baseUrl}/${lang}`,
    }));
}

