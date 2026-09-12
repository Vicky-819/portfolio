import { ProjectDetailView } from "@/components/ProjectDetailView";
import { INDEPENDENT_IDS, PROJECT_META } from "@/content/projects";
import type { IndependentId } from "@/content/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

const BY_SLUG: Record<string, IndependentId> = Object.fromEntries(
  INDEPENDENT_IDS.map((id) => [PROJECT_META[id].slug, id]),
);

export function generateStaticParams() {
  return INDEPENDENT_IDS.map((id) => ({ slug: PROJECT_META[id].slug }));
}

export const metadata: Metadata = {
  title: "Projects — Vicky",
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const id = BY_SLUG[slug];
  if (!id) {
    notFound();
  }
  return <ProjectDetailView id={id} />;
}
