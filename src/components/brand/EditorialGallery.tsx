import Image from "next/image";
import type { Brand } from "@/lib/types";
import { FadeIn } from "@/components/ui/FadeIn";

interface EditorialGalleryProps {
  brand: Brand;
}

export function EditorialGallery({ brand }: EditorialGalleryProps) {
  // Skip the first two images (hero + story detail)
  const galleryImages = brand.images.slice(2);

  if (galleryImages.length === 0) return null;

  return (
    <section className="pb-16 md:pb-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
        {galleryImages.map((image, i) => (
          <FadeIn key={image.src} delay={i * 150}>
            {i % 2 === 0 ? (
              // Full-width image
              <div className="relative aspect-[4/5] md:aspect-[3/2] overflow-hidden">
                <Image
                  src={`/images/${image.src}.jpg`}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 90vw"
                  className="object-cover"
                />
              </div>
            ) : (
              // Inset image with margins
              <div className="max-w-3xl mx-auto">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={`/images/${image.src}.jpg`}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>
              </div>
            )}
            {image.sharedWith && image.sharedWith.length > 0 && (
              <p className="mt-3 text-[11px] text-ink-light tracking-wide text-center">
                Also featuring pieces from{" "}
                {image.sharedWith
                  .map((s) => s.replace(/-/g, " "))
                  .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
                  .join(", ")}
              </p>
            )}
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
