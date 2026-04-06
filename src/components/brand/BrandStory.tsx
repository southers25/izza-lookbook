import Image from "next/image";
import type { Brand } from "@/lib/types";
import { FadeIn } from "@/components/ui/FadeIn";

interface BrandStoryProps {
  brand: Brand;
}

export function BrandStory({ brand }: BrandStoryProps) {
  const detailImage = brand.images[1];

  return (
    <section className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {detailImage ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            <FadeIn className="md:col-span-7">
              <div className="max-w-xl">
                <h2 className="font-serif text-2xl md:text-3xl mb-8">
                  The Story
                </h2>
                <p className="text-base md:text-lg leading-[1.8] text-ink/80">
                  {brand.story}
                </p>
                {brand.website && (
                  <a
                    href={brand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-8 text-xs tracking-[0.2em] uppercase text-teal hover:text-teal-light transition-colors border-b border-teal/30 pb-0.5"
                  >
                    Visit {brand.name}
                  </a>
                )}
              </div>
            </FadeIn>

            <FadeIn delay={200} className="md:col-span-5 md:-mt-16">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={`/images/${detailImage.src}.jpg`}
                  alt={detailImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              {detailImage.sharedWith && detailImage.sharedWith.length > 0 && (
                <p className="mt-3 text-[11px] text-ink-light tracking-wide">
                  Also featuring pieces from{" "}
                  {detailImage.sharedWith
                    .map((s) => s.replace(/-/g, " "))
                    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
                    .join(", ")}
                </p>
              )}
            </FadeIn>
          </div>
        ) : (
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-2xl md:text-3xl mb-8">
                The Story
              </h2>
              <p className="text-base md:text-lg leading-[1.8] text-ink/80">
                {brand.story}
              </p>
              {brand.website && (
                <a
                  href={brand.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-8 text-xs tracking-[0.2em] uppercase text-teal hover:text-teal-light transition-colors border-b border-teal/30 pb-0.5"
                >
                  Visit {brand.name}
                </a>
              )}
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
