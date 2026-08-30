"use client";

import { LocaleLink } from "@/components/LocaleLink";
import { useLanguage } from "@/lib/i18n";

export function SiteFooter() {
  const { dictionary } = useLanguage();

  return (
    <footer className="px-6 pb-10 pt-8 md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <LocaleLink
          href="/"
          className="text-[12px] tracking-[0.22em] uppercase text-ink/50"
        >
          {dictionary.nav.brand}
        </LocaleLink>
        <p className="font-serif text-sm italic text-ink/40">
          {dictionary.footer.note}
        </p>
      </div>
    </footer>
  );
}
