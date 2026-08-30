import type { Locale } from "@/content/types";

export const LANG_PARAM = "lang";

export function withLang(href: string, locale: Locale): string {
  if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("http")) {
    return href;
  }

  const [pathAndQuery, hash] = href.split("#");
  const [path, query] = pathAndQuery.split("?");
  const params = new URLSearchParams(query ?? "");
  params.delete(LANG_PARAM);
  if (locale === "zh") {
    params.set(LANG_PARAM, "zh");
  }
  const queryString = params.toString();
  const next = queryString ? `${path}?${queryString}` : path;
  return hash ? `${next}#${hash}` : next;
}

export function localeFromSearchParams(
  searchParams: { lang?: string } | URLSearchParams,
): Locale {
  const value =
    searchParams instanceof URLSearchParams
      ? searchParams.get(LANG_PARAM)
      : searchParams.lang;
  return value === "zh" ? "zh" : "en";
}
