"use client";

import { LocaleLink } from "@/components/LocaleLink";
import { useLanguage } from "@/lib/i18n";

export function SiteFooter() {
  const { dictionary } = useLanguage();

  return (
    <footer className="bg-ink px-6 pb-10 pt-2 text-ivory md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-3 border-t border-ivory/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <LocaleLink
          href="/"
          className="text-[12px] uppercase tracking-[0.22em] text-ivory/50 transition-colors duration-500 hover:text-ivory"
        >
          {dictionary.nav.brand}
        </LocaleLink>
        <p className="serif-italic text-sm text-ivory/40">
          {dictionary.footer.note}
        </p>
      </div>
    </footer>
  );
}
