import { dictionaries } from "@/content";
import { localeFromSearchParams } from "@/lib/locale";
import type { Locale } from "@/content/types";
import type { Metadata } from "next";

export async function localeFromPageSearchParams(
  searchParams: Promise<{ lang?: string }>,
): Promise<Locale> {
  const params = await searchParams;
  return localeFromSearchParams(params);
}

export function pageMetadata(
  locale: Locale,
  documentTitle: string,
): Metadata {
  return {
    title: documentTitle,
    description: dictionaries[locale].meta.description,
  };
}
