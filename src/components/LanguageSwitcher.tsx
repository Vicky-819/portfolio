"use client";

import { useLanguage } from "@/lib/i18n";
import type { Locale } from "@/content/types";

const options: { locale: Locale; label: string }[] = [
  { locale: "en", label: "EN" },
  { locale: "zh", label: "中文" },
];

export function LanguageSwitcher() {
  const { locale, setLocale, dictionary } = useLanguage();

  return (
    <div
      className="flex items-center gap-2 text-[11px] tracking-[0.18em]"
      role="group"
      aria-label={dictionary.nav.languageLabel}
    >
      {options.map((option, index) => {
        const active = locale === option.locale;
        return (
          <span key={option.locale} className="flex items-center gap-2">
            {index > 0 ? (
              <span className="text-ink/25" aria-hidden>
                |
              </span>
            ) : null}
            <button
              type="button"
              onClick={() => setLocale(option.locale)}
              className={`transition-colors duration-300 ${
                option.locale === "en" ? "uppercase" : ""
              } ${active ? "text-ink" : "text-ink/40 hover:text-ink"}`}
              aria-pressed={active}
            >
              {option.label}
            </button>
          </span>
        );
      })}
    </div>
  );
}
