"use client";

import { Reveal } from "@/components/Reveal";
import { CURRENTLY_ORDER } from "@/content/projects";
import { useLanguage } from "@/lib/i18n";

export function Currently() {
  const { dictionary } = useLanguage();
  const copy = dictionary.currently;

  return (
    <section id="now" className="px-6 py-24 md:px-10 md:py-32 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-14 grid gap-4 md:mb-16 md:grid-cols-12 md:items-end">
          <p className="eyebrow md:col-span-3">{copy.eyebrow}</p>
          <h2 className="text-[1.75rem] font-medium tracking-tight text-ink md:col-span-8 md:text-[2.15rem]">
            {copy.title}
          </h2>
        </Reveal>

        <dl className="border-t border-ink/12">
          {CURRENTLY_ORDER.map((id, index) => {
            const item = copy.items[id];
            return (
              <Reveal
                key={id}
                delay={index * 60}
                className="grid gap-1.5 border-b border-ink/12 py-7 md:grid-cols-12 md:items-baseline md:py-8"
              >
                <dt className="meta md:col-span-3">{item.label}</dt>
                <dd className="text-[1.15rem] tracking-[-0.01em] text-ink md:col-span-8">
                  {item.value}
                </dd>
              </Reveal>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
