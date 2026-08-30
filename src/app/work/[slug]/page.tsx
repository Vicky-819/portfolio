import { CaseStudyView } from "@/components/CaseStudyView";
import { dictionaries } from "@/content";
import { getProjectIdBySlug, PROJECT_META, workCaseIds } from "@/content/projects";
import { localeFromPageSearchParams, pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
};

export function generateStaticParams() {
  return workCaseIds().map((id) => ({ slug: PROJECT_META[id].slug }));
}

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const id = getProjectIdBySlug(slug);
  if (!id || PROJECT_META[id].kind === "experiment") {
    return { title: "Work — Vicky" };
  }
  const locale = await localeFromPageSearchParams(searchParams);
  const project = dictionaries[locale].projects[id];
  return pageMetadata(locale, `${project.title} — Vicky`);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const id = getProjectIdBySlug(slug);
  if (!id || PROJECT_META[id].kind === "experiment") {
    notFound();
  }
  return <CaseStudyView id={id} />;
}
