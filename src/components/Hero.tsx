"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";

const POSITIONING_DOTS = [
  "var(--tone-terracotta-mark)",
  "var(--tone-sage-mark)",
];

function SplitChars({
  text,
  baseDelay = 0,
  step = 55,
}: {
  text: string;
  baseDelay?: number;
  step?: number;
}) {
  return (
    <span aria-label={text} role="text">
      {text.split("").map((char, i) => (
        <span key={i} aria-hidden className="char-mask">
          <span
            className="char-rise"
            style={{ transitionDelay: `${baseDelay + i * step}ms` }}
          >
            {char === " " ? " " : char}
          </span>
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const { dictionary } = useLanguage();
  const { hero } = dictionary;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const positioningWords = hero.positioning
    .split("·")
    .map((word) => word.trim())
    .filter(Boolean);

  return (
    <section
      id="top"
      className={`relative flex min-h-[84svh] flex-col justify-end px-6 pb-12 pt-24 md:px-10 md:pb-14 lg:px-14 ${
        ready ? "chars-in" : ""
      }`}
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-8 flex items-end justify-between gap-6 md:mb-12">
          <p className="rise-in eyebrow" style={{ animationDelay: "60ms" }}>
            {hero.givenName}
          </p>
          <p
            className="rise-in meta text-ink/55"
            style={{ animationDelay: "120ms" }}
          >
            Portfolio
          </p>
        </div>

        <h1 className="font-sans text-[21vw] font-medium leading-[0.82] tracking-[-0.05em] text-ink sm:text-[17vw] lg:text-[11.5rem]">
          <SplitChars text={hero.name} baseDelay={200} />
        </h1>

        <p
          className="rise-in mt-7 flex flex-wrap items-baseline gap-x-4 gap-y-2 md:mt-9 md:gap-x-5"
          style={{ animationDelay: "420ms" }}
          aria-label={hero.positioning}
        >
          {positioningWords.map((word, i) => (
            <span key={word} className="flex items-baseline gap-4 md:gap-5">
              <span className="serif-italic text-[1.55rem] leading-none tracking-[-0.01em] text-ink/85 md:text-[2rem]">
                {word}
              </span>
              {i < positioningWords.length - 1 && (
                <span
                  aria-hidden
                  className="inline-block h-[7px] w-[7px] translate-y-[-2px] rounded-full"
                  style={{
                    background:
                      POSITIONING_DOTS[i % POSITIONING_DOTS.length],
                  }}
                />
              )}
            </span>
          ))}
        </p>

        <div className="mt-8 grid gap-8 border-t border-ink/12 pt-7 md:mt-10 md:grid-cols-12 md:items-end md:pt-8">
          <div className="md:col-span-7 lg:col-span-6 lg:col-start-4">
            <p
              className="rise-in text-[1.25rem] leading-[1.65] tracking-[-0.01em] text-ink/80 md:text-[1.45rem] md:leading-[1.6]"
              style={{ animationDelay: "550ms" }}
            >
              {hero.statementLead}{" "}
              <em className="serif-italic text-ink">
                {hero.statementEmphasis}
              </em>
            </p>
          </div>
          <div
            className="rise-in md:col-span-5 lg:col-span-3 lg:text-right"
            style={{ animationDelay: "650ms" }}
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] text-ink"
            >
              <span className="border-b border-ink/25 pb-0.5 transition-colors duration-500 group-hover:border-ink">
                {hero.cta}
              </span>
              <span
                aria-hidden
                className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-1"
              >
                ↓
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
