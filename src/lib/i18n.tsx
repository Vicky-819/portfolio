"use client";

import {
  createContext,
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { dictionaries } from "@/content";
import type { Dictionary, Locale } from "@/content/types";
import { localeFromSearchParams, withLang } from "@/lib/locale";

const STORAGE_KEY = "vicky-locale";

type LanguageContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function LocaleTree({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-Hans" : "en";
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = useCallback(
    (next: Locale) => {
      window.localStorage.setItem(STORAGE_KEY, next);
      router.replace(withLang(pathname, next), { scroll: false });
    },
    [pathname, router],
  );

  const value = useMemo(
    () => ({
      locale,
      dictionary: dictionaries[locale],
      setLocale,
    }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

function LanguageFromUrl({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const locale = localeFromSearchParams(searchParams);
  return <LocaleTree locale={locale}>{children}</LocaleTree>;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<LocaleTree locale="en">{children}</LocaleTree>}>
      <LanguageFromUrl>{children}</LanguageFromUrl>
    </Suspense>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
