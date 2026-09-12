import { en } from "./en";
import { zh } from "./zh";
import type { Dictionary, Locale } from "./types";

export const dictionaries: Record<Locale, Dictionary> = { en, zh };

export const defaultLocale: Locale = "en";

export function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "zh";
}
