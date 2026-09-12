"use client";

import { LocaleLink } from "@/components/LocaleLink";

export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: string;
  className?: string;
}) {
  return (
    <LocaleLink
      href={href}
      className={`group inline-flex items-center gap-3 text-[12px] tracking-[0.2em] uppercase text-ink ${className}`}
    >
      <span className="border-b border-ink/25 pb-0.5 transition-colors duration-500 group-hover:border-ink">
        {children}
      </span>
      <span
        aria-hidden
        className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5"
      >
        →
      </span>
    </LocaleLink>
  );
}
