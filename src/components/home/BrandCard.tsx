import Image from "next/image";
import Link from "next/link";
import type { Brand } from "@/lib/types";

interface BrandCardProps {
  brand: Brand;
}

export function BrandCard({ brand }: BrandCardProps) {
  const heroImage = brand.images[0];
  if (!heroImage) return null;

  return (
    <Link
      href={`/brands/${brand.slug}`}
      className="group relative block overflow-hidden"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={`/images/${heroImage.src}.jpg`}
          alt={heroImage.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <h3 className="font-serif text-xl md:text-2xl text-cream">
          {brand.name}
        </h3>
        <p className="mt-1 text-xs text-cream/0 group-hover:text-cream/70 transition-all duration-500 tracking-wide">
          {brand.tagline}
        </p>
      </div>
    </Link>
  );
}
