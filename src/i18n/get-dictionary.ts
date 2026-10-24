import "server-only";
import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/tr";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  tr: () => import("./dictionaries/tr").then((m) => m.default),
  en: () => import("./dictionaries/en").then((m) => m.default),
};

export const getDictionary = (locale: Locale) => dictionaries[locale]();

export type { Dictionary };
