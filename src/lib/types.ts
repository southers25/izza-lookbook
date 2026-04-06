export type ImageRole = "hero" | "detail" | "atmosphere" | "styled";

export interface BrandImage {
  src: string;
  alt: string;
  role: ImageRole;
  aspect: "portrait" | "landscape" | "square";
  sharedWith?: string[];
}

export interface Brand {
  slug: string;
  name: string;
  tagline: string;
  categoryLabel: string;
  material?: string;
  founder?: string;
  instagram?: string;
  website?: string;
  story: string;
  images: BrandImage[];
  isHouseBrand: boolean;
}
