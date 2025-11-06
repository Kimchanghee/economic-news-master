import ar from "./ar";
import de from "./de";
import en from "./en";
import es from "./es";
import fr from "./fr";
import hi from "./hi";
import id from "./id";
import it from "./it";
import ja from "./ja";
import ko from "./ko";
import pt from "./pt";
import ru from "./ru";
import th from "./th";
import vi from "./vi";
import zh from "./zh";
import { LocaleContent } from "./types";

const localeContent = {
  en,
  ko,
  ja,
  zh,
  es,
  fr,
  de,
  it,
  pt,
  ru,
  ar,
  hi,
  id,
  vi,
  th,
} satisfies Record<string, LocaleContent>;

export const LOCALE_CONTENT = localeContent;

export const SUPPORTED_LANGS = Object.keys(localeContent) as Array<keyof typeof localeContent>;

export type LocaleKey = keyof typeof localeContent;

export function getLocaleContent(lang?: string): LocaleContent {
  if (lang && lang in localeContent) {
    return localeContent[lang as LocaleKey];
  }
  return localeContent.en;
}
