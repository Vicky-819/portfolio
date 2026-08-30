"use client";

import { Reveal } from "@/components/Reveal";
import { CAPABILITY_ORDER, CAPABILITY_TONE } from "@/content/projects";
import { useLanguage } from "@/lib/i18n";

const toneMark: Record<string, string> = {
  terracotta: "bg-tone-terracotta-mark",
  blue: "bg-tone-blue-mark",
  sage: "bg-tone-sage-mark",
  ochre: "bg-tone-ochre-mark",
};

export function WorkAcross() {
  const { dictionary } = useLanguage();

  return (
    <section className="px-6 pb-24 md:px-10 lg:px-14 lg:pb-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-10 grid gap-3 md:mb-14 md:grid-cols-12 md:items-end">
          <p className="eyebrow md:col-span-3">
            {dictionary.workAcross.eyebrow}
          </p>
          <h2 className="text-[1.75rem] font-medium tracking-tight text-ink md:col-span-8 md:text-[2.15rem]">
            {dictionary.workAcross.title}
          </h2>
        </Reveal>

        <ul className="grid gap-0 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITY_ORDER.map((id, index) => {
            const item = dictionary.capabilities[id];
            const tone = CAPABILITY_TONE[id];
            return (
              <Reveal
                key={id}
                as="li"
                delay={index * 80}
                className="group border-b border-line py-7 sm:px-6 sm:first:pl-0 sm:odd:border-r lg:border-r lg:px-8 lg:py-9 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <span
                  className={`mb-5 block h-px w-8 origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-150 ${toneMark[tone]}`}
                  aria-hidden
                />
                <p className="meta mb-3">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="text-[1.2rem] tracking-[-0.02em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-3.5 max-w-xs text-[0.95rem] leading-[1.7] text-ink/60">
                  {item.description}
                </p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
