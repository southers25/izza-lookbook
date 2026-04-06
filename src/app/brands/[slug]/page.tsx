import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { brands } from "@/lib/data";
import { getBrandBySlug } from "@/lib/utils";
import { BrandHero } from "@/components/brand/BrandHero";
import { BrandMeta } from "@/components/brand/BrandMeta";
import { BrandStory } from "@/components/brand/BrandStory";
import { EditorialGallery } from "@/components/brand/EditorialGallery";
import { RelatedBrands } from "@/components/brand/RelatedBrands";

interface BrandPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: BrandPageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return {};

  return {
    title: `${brand.name} \u2014 IZZA Boutique`,
    description: brand.tagline + ". " + brand.story.slice(0, 140) + "\u2026",
  };
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    notFound();
  }

  return (
    <>
      <BrandHero brand={brand} />
      <BrandMeta brand={brand} />
      <BrandStory brand={brand} />
      <EditorialGallery brand={brand} />
      <RelatedBrands brand={brand} />
    </>
  );
}
