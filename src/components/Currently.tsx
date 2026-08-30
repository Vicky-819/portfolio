"use client";

import { Reveal } from "@/components/Reveal";
import { CURRENTLY_ORDER } from "@/content/projects";
import { useLanguage } from "@/lib/i18n";

export function Currently() {
  const { dictionary } = useLanguage();
  const copy = dictionary.currently;

  return (
    <section id="now" className="px-6 py-16 md:px-10 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-10 grid gap-3 md:mb-12 md:grid-cols-12 md:items-end">
          <p className="eyebrow md:col-span-3">{copy.eyebrow}</p>
          <h2 className="text-[1.75rem] font-medium tracking-tight text-ink md:col-span-8 md:text-[2.15rem]">
            {copy.title}
          </h2>
        </Reveal>
        <ul className="grid gap-0 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {CURRENTLY_ORDER.map((id, index) => {
            const item = copy.items[id];
            return (
              <Reveal
                key={id}
                as="li"
                delay={index * 70}
                className="border-b border-line py-7 sm:px-6 sm:first:pl-0 sm:odd:border-r lg:border-r lg:px-8 lg:py-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <p className="meta mb-3">{item.label}</p>
                <p className="text-[1.05rem] leading-snug tracking-tight text-ink">
                  {item.value}
                </p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
