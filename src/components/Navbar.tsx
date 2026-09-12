"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { LocaleLink } from "@/components/LocaleLink";
import { NAV_HREFS } from "@/content/projects";
import type { NavKey } from "@/content/types";
import { useLanguage } from "@/lib/i18n";

const NAV_KEYS: NavKey[] = ["work", "experiments", "about", "contact"];

function isActive(pathname: string, key: NavKey) {
  const href = NAV_HREFS[key];
  if (key === "work") {
    return pathname === "/work" || pathname.startsWith("/work/");
  }
  if (key === "experiments") {
    return pathname === "/experiments" || pathname.startsWith("/experiments/");
  }
  return pathname === href;
}

export function Navbar() {
  const { dictionary } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-500 ${
        scrolled || open
          ? "bg-ivory/95 shadow-[0_1px_0_var(--color-line)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10 lg:px-14">
        <LocaleLink
          href="/"
          className="font-sans text-[13px] font-medium tracking-[0.28em] uppercase text-ink"
        >
          {dictionary.nav.brand}
        </LocaleLink>

        <nav
          className="hidden items-center gap-9 md:flex"
          aria-label="Primary"
        >
          {NAV_KEYS.map((key) => (
            <LocaleLink
              key={key}
              href={NAV_HREFS[key]}
              className={`text-[13px] tracking-[0.04em] transition-colors duration-500 ${
                isActive(pathname, key)
                  ? "text-ink"
                  : "text-ink/65 hover:text-ink"
              }`}
            >
              {dictionary.nav.items[key]}
            </LocaleLink>
          ))}
          <LanguageSwitcher />
        </nav>

        <button
          type="button"
          className="relative h-10 w-10 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span
            className={`absolute left-2 right-2 h-px bg-ink transition-transform duration-300 ${
              open ? "top-1/2 rotate-45" : "top-[14px]"
            }`}
          />
          <span
            className={`absolute left-2 right-2 h-px bg-ink transition-transform duration-300 ${
              open ? "top-1/2 -rotate-45" : "top-[24px]"
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="flex flex-col gap-5 border-t border-line px-6 py-8"
          aria-label="Mobile"
        >
          {NAV_KEYS.map((key) => (
            <LocaleLink
              key={key}
              href={NAV_HREFS[key]}
              onClick={() => setOpen(false)}
              className="text-2xl tracking-tight text-ink"
            >
              {dictionary.nav.items[key]}
            </LocaleLink>
          ))}
          <div className="pt-2">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
