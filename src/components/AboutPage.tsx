"use client";

import { Reveal } from "@/components/Reveal";
import { CAPABILITY_ORDER, CAPABILITY_TONE, EXPERIENCE_ORDER } from "@/content/projects";
import { useLanguage } from "@/lib/i18n";

const toneMark: Record<string, string> = {
  terracotta: "bg-tone-terracotta-mark",
  blue: "bg-tone-blue-mark",
  sage: "bg-tone-sage-mark",
  ochre: "bg-tone-ochre-mark",
};

export function AboutPage() {
  const { dictionary } = useLanguage();
  const copy = dictionary.pages.about;

  return (
    <main className="pt-24 md:pt-28">
      <section className="px-6 pb-10 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="grid gap-4 md:grid-cols-12">
            <p className="eyebrow md:col-span-3">{copy.eyebrow}</p>
            <h1 className="text-[2.4rem] font-medium tracking-[-0.04em] text-ink md:col-span-8 md:text-[3.5rem]">
              {copy.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-[1400px] gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <h2 className="text-[1.2rem] tracking-tight text-ink">{copy.whoTitle}</h2>
          </Reveal>
          <Reveal delay={80} className="md:col-span-7">
            <p className="max-w-xl text-[1.1rem] leading-[1.8] text-ink/70">
              {copy.whoBody}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-8 md:mb-10">
            <h2 className="text-[1.2rem] tracking-tight text-ink">
              {copy.educationTitle}
            </h2>
          </Reveal>
          <ul>
            {dictionary.education.map((item) => (
              <li
                key={item.school}
                className="grid gap-2 border-t border-line py-6 md:grid-cols-12"
              >
                <p className="text-[1.05rem] text-ink md:col-span-4">{item.school}</p>
                <p className="text-[0.95rem] leading-relaxed text-ink/60 md:col-span-7">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-8 md:mb-10">
            <h2 className="text-[1.2rem] tracking-tight text-ink">
              {copy.experienceTitle}
            </h2>
          </Reveal>
          <ol>
            {EXPERIENCE_ORDER.map((id, index) => {
              const item = dictionary.experience[id];
              return (
                <li
                  key={id}
                  className="grid grid-cols-1 gap-2 border-t border-line py-6 last:border-b md:grid-cols-12 md:items-baseline md:gap-6"
                >
                  <p className="meta md:col-span-3">{item.period}</p>
                  <div className="md:col-span-8">
                    <p className="text-[1.15rem] tracking-tight text-ink">{item.org}</p>
                    <p className="mt-1 text-[0.95rem] text-ink/55">{item.role}</p>
                  </div>
                  <span className="hidden text-[11px] tracking-[0.16em] text-ink/25 md:col-span-1 md:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="px-6 py-12 pb-24 md:px-10 lg:px-14 lg:pb-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-10">
            <h2 className="text-[1.2rem] tracking-tight text-ink">
              {copy.capabilitiesTitle}
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
                  delay={index * 70}
                  className="border-b border-line py-7 sm:px-6 sm:first:pl-0 sm:odd:border-r lg:border-r lg:px-8 lg:py-9 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
                >
                  <span
                    className={`mb-5 block h-px w-8 ${toneMark[tone]}`}
                    aria-hidden
                  />
                  <h3 className="text-[1.15rem] tracking-tight text-ink">{item.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-[1.7] text-ink/60">
                    {item.description}
                  </p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
