"use client";

import { ArrowLink } from "@/components/ArrowLink";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n";

export function AboutPreview() {
  const { dictionary } = useLanguage();
  const copy = dictionary.homeAbout;

  return (
    <section id="about" className="bg-paper">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 md:grid-cols-12 md:items-center md:gap-10 md:px-10 md:py-36 lg:px-14">
        <Reveal className="md:col-span-6 md:col-start-1">
          <p className="eyebrow mb-8">{copy.eyebrow}</p>
          <h2 className="max-w-md text-[1.75rem] font-medium leading-[1.3] tracking-tight text-ink md:text-[2.15rem]">
            {copy.title}
          </h2>
          <p className="mt-7 max-w-lg text-[1.05rem] leading-[1.8] text-ink/70">
            {copy.body}
          </p>
          <ArrowLink href="/about" className="mt-10">
            {copy.cta}
          </ArrowLink>
        </Reveal>

        <Reveal delay={120} className="md:col-span-3 md:col-start-9">
          <div className="img-frame aspect-[3/4]">
            <img
              src="/images/home/portrait.jpg"
              alt={copy.portraitAlt}
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
