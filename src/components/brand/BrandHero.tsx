import Image from "next/image";
import type { Brand } from "@/lib/types";

interface BrandHeroProps {
  brand: Brand;
}

export function BrandHero({ brand }: BrandHeroProps) {
  const heroImage = brand.images[0];
  if (!heroImage) return null;

  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      <Image
        src={`/images/${heroImage.src}.jpg`}
        alt={heroImage.alt}
        fill
        sizes="100vw"
        className="object-cover"
        preload={true}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream">
            {brand.name}
          </h1>
          <p className="mt-3 text-sm md:text-base text-cream/70 tracking-wide max-w-md">
            {brand.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
