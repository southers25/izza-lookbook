import { brands } from "./data";
import type { Brand } from "./types";

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export function getRelatedBrands(brand: Brand, count = 3): Brand[] {
  const others = brands.filter((b) => b.slug !== brand.slug);
  const sameCategory = others.filter(
    (b) => b.categoryLabel === brand.categoryLabel
  );
  const rest = others.filter(
    (b) => b.categoryLabel !== brand.categoryLabel
  );
  return [...sameCategory, ...rest].slice(0, count);
}

export function getArtisanBrands(): Brand[] {
  return brands.filter((b) => !b.isHouseBrand);
}

export function getHouseBrands(): Brand[] {
  return brands.filter((b) => b.isHouseBrand);
}
