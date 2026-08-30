import { AboutPage } from "@/components/AboutPage";
import { dictionaries } from "@/content";
import { localeFromPageSearchParams, pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

type Props = { searchParams: Promise<{ lang?: string }> };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const locale = await localeFromPageSearchParams(searchParams);
  return pageMetadata(locale, dictionaries[locale].pages.about.documentTitle);
}

export default function Page() {
  return <AboutPage />;
}
