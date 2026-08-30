import { CaseStudyView } from "@/components/CaseStudyView";
import { dictionaries } from "@/content";
import { EXPERIMENT_IDS, getProjectIdBySlug, PROJECT_META } from "@/content/projects";
import { localeFromPageSearchParams, pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
};

export function generateStaticParams() {
  return EXPERIMENT_IDS.map((id) => ({ slug: PROJECT_META[id].slug }));
}

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const id = getProjectIdBySlug(slug, "experiment");
  if (!id) {
    return { title: "Experiments — Vicky" };
  }
  const locale = await localeFromPageSearchParams(searchParams);
  const project = dictionaries[locale].projects[id];
  return pageMetadata(locale, `${project.title} — Vicky`);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const id = getProjectIdBySlug(slug, "experiment");
  if (!id) {
    notFound();
  }
  return <CaseStudyView id={id} compact />;
}
