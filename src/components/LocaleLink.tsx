"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useLanguage } from "@/lib/i18n";
import { withLang } from "@/lib/locale";

type LocaleLinkProps = ComponentProps<typeof Link>;

export function LocaleLink({ href, ...props }: LocaleLinkProps) {
  const { locale } = useLanguage();
  const nextHref =
    typeof href === "string" ? withLang(href, locale) : href;

  return <Link href={nextHref} {...props} />;
}
