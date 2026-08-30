"use client";

import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n";

export function ContactBlock({
  id = "contact",
  compact = false,
}: {
  id?: string;
  compact?: boolean;
}) {
  const { dictionary } = useLanguage();
  const links = dictionary.contactLinks;

  return (
    <section
      id={id}
      className={`px-6 md:px-10 lg:px-14 ${compact ? "py-20 lg:py-28" : "py-24 lg:py-32"}`}
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="eyebrow mb-8">{dictionary.homeContact.eyebrow}</p>
          <h2 className="max-w-3xl font-serif text-[2.1rem] italic leading-[1.2] text-ink md:text-[3.25rem]">
            {dictionary.homeContact.statement}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <ul className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-4">
            <li>
              <a
                href={links.email.href}
                className="group text-[0.95rem] text-ink/70 transition-colors duration-500 hover:text-ink"
              >
                <span className="meta mr-3">{links.email.label}</span>
                <span className="border-b border-ink/15 pb-0.5 group-hover:border-ink/40">
                  {links.email.value}
                </span>
              </a>
            </li>
            <li>
              <a
                href={links.linkedin.href}
                className="group text-[0.95rem] text-ink/70 transition-colors duration-500 hover:text-ink"
              >
                <span className="meta mr-3">{links.linkedin.label}</span>
                <span className="border-b border-ink/15 pb-0.5 group-hover:border-ink/40">
                  {links.linkedin.value}
                </span>
              </a>
            </li>
            <li>
              <a
                href={links.github.href}
                className="group text-[0.95rem] text-ink/70 transition-colors duration-500 hover:text-ink"
              >
                <span className="meta mr-3">{links.github.label}</span>
                <span className="border-b border-ink/15 pb-0.5 group-hover:border-ink/40">
                  {links.github.value}
                </span>
              </a>
            </li>
            <li>
              <a
                href={links.cv.href}
                className="group inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-ink"
              >
                <span className="border-b border-ink/25 pb-0.5 group-hover:border-ink">
                  {links.cv.label}
                </span>
                <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
