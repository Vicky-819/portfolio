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

  const items = [
    { label: links.email.label, value: links.email.value, href: links.email.href },
    { label: links.linkedin.label, value: links.linkedin.value, href: links.linkedin.href },
    { label: links.github.label, value: links.github.value, href: links.github.href },
  ];

  return (
    <section
      id={id}
      className={`bg-ink text-ivory ${compact ? "" : ""}`}
    >
      <div
        className={`mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14 ${
          compact ? "py-24 lg:py-32" : "py-28 lg:py-40"
        }`}
      >
        <Reveal>
          <p className="eyebrow mb-10 !text-ivory/45">
            {dictionary.homeContact.eyebrow}
          </p>
          <h2 className="max-w-4xl serif-italic text-[2.4rem] leading-[1.18] text-ivory md:text-[3.75rem]">
            {dictionary.homeContact.statement}
          </h2>
          <p className="mt-8 max-w-md text-[1.02rem] leading-[1.75] text-ivory/55">
            {dictionary.homeContact.subline}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="mt-16 border-t border-ivory/15 md:mt-20">
            {items.map((item) => (
              <li key={item.label} className="border-b border-ivory/15">
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group grid items-baseline gap-1 py-5 transition-[padding] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:pl-3 md:grid-cols-12 md:py-6"
                >
                  <span className="meta !text-ivory/40 md:col-span-3">
                    {item.label}
                  </span>
                  <span className="text-[1.05rem] text-ivory/85 transition-colors duration-500 group-hover:text-ivory md:col-span-8">
                    {item.value}
                  </span>
                  <span
                    aria-hidden
                    className="hidden text-ivory/40 transition-all duration-500 group-hover:translate-x-1 group-hover:text-ivory md:col-span-1 md:block md:text-right"
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
            <li className="border-b border-ivory/15">
              <div className="grid items-baseline gap-2 py-5 md:grid-cols-12 md:py-6">
                <span className="meta !text-ivory/40 md:col-span-3">
                  {links.cv.label}
                </span>
                <span className="flex flex-wrap gap-x-8 gap-y-2 md:col-span-8">
                  <a
                    href="/cv/vicky-resume-en.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-[1.05rem] text-ivory/85 transition-colors duration-500 hover:text-ivory"
                  >
                    <span className="border-b border-ivory/25 pb-0.5 group-hover:border-ivory/70">
                      English
                    </span>
                    <span aria-hidden className="text-ivory/40">↓</span>
                  </a>
                  <a
                    href="/cv/vicky-resume-zh.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-[1.05rem] text-ivory/85 transition-colors duration-500 hover:text-ivory"
                  >
                    <span className="border-b border-ivory/25 pb-0.5 group-hover:border-ivory/70">
                      中文
                    </span>
                    <span aria-hidden className="text-ivory/40">↓</span>
                  </a>
                </span>
              </div>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
