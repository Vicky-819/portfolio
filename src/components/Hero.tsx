"use client";

import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { dictionary } = useLanguage();
  const { hero } = dictionary;

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end px-6 pb-14 pt-28 md:px-10 md:pb-16 lg:px-14 lg:pb-[4.5rem]"
    >
      <div className="mx-auto grid w-full max-w-[1400px] items-end gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-8">
          <p className="eyebrow rise-in mb-5 md:mb-7">{hero.givenName}</p>
          <h1
            className="rise-in font-sans text-[17vw] font-medium leading-[0.84] tracking-[-0.054em] text-ink sm:text-[13vw] lg:text-[8.75rem]"
            style={{ animationDelay: "70ms" }}
          >
            {hero.name}
          </h1>
          <p
            className="rise-in mt-5 font-serif text-[1.2rem] italic leading-snug text-ink/65 md:mt-6 md:text-[1.45rem]"
            style={{ animationDelay: "140ms" }}
          >
            {hero.positioning}
          </p>
        </div>

        <div
          className="rise-in max-w-md lg:col-span-4 lg:mb-1 lg:justify-self-end"
          style={{ animationDelay: "180ms" }}
        >
          <p className="text-[1.05rem] leading-[1.7] text-ink/75 md:text-[1.2rem] md:leading-[1.75]">
            {hero.statementLead}{" "}
            <em className="font-serif italic text-ink">{hero.statementEmphasis}</em>
          </p>
          <a
            href="#work"
            className="group mt-8 inline-flex items-center gap-3 text-[12px] tracking-[0.2em] uppercase text-ink"
          >
            <span className="border-b border-ink/25 pb-0.5 transition-colors duration-500 group-hover:border-ink">
              {hero.cta}
            </span>
            <span
              aria-hidden
              className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
