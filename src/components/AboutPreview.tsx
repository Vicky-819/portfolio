"use client";

import { ArrowLink } from "@/components/ArrowLink";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n";

export function AboutPreview() {
  const { dictionary } = useLanguage();
  const copy = dictionary.homeAbout;

  return (
    <section id="about" className="px-6 py-20 md:px-10 lg:px-14 lg:py-[6.5rem]">
      <div className="mx-auto grid max-w-[1400px] gap-8 md:grid-cols-12">
        <Reveal className="md:col-span-3">
          <p className="eyebrow">{copy.eyebrow}</p>
        </Reveal>
        <Reveal delay={80} className="md:col-span-7 lg:col-span-6">
          <h2 className="text-[1.75rem] font-medium tracking-tight text-ink md:text-[2.15rem]">
            {copy.title}
          </h2>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-[1.75] text-ink/65">
            {copy.body}
          </p>
          <ArrowLink href="/about" className="mt-8">
            {copy.cta}
          </ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
