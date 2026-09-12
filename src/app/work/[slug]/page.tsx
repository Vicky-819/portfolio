import { CaseAiProduct } from "@/components/case/CaseAiProduct";
import { CaseContentBrand } from "@/components/case/CaseContentBrand";
import { CaseEcommerce } from "@/components/case/CaseEcommerce";
import { CaseResearch } from "@/components/case/CaseResearch";
import { getProjectIdBySlug, PROJECT_META, workCaseIds } from "@/content/projects";
import type { FeaturedId } from "@/content/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

const VIEWS: Record<FeaturedId, () => React.ReactElement> = {
  "ecommerce-growth": CaseEcommerce,
  "ai-product-ops": CaseAiProduct,
  "quantitative-research": CaseResearch,
  "content-brand-growth": CaseContentBrand,
};

export function generateStaticParams() {
  return workCaseIds().map((id) => ({ slug: PROJECT_META[id].slug }));
}

export const metadata: Metadata = {
  title: "Work — Vicky",
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const id = getProjectIdBySlug(slug);
  if (!id || !(id in VIEWS)) {
    notFound();
  }
  const View = VIEWS[id as FeaturedId];
  return <View />;
}
