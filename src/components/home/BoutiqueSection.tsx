import Image from "next/image";
import { siteImages } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";

export function BoutiqueSection() {
  return (
    <section className="relative py-0">
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src={`/images/${siteImages.boutique[0]}.jpg`}
          alt="IZZA Boutique interior with Moroccan architecture and curated displays"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <FadeIn>
            <blockquote className="max-w-2xl text-center">
              <p className="font-serif text-2xl md:text-4xl text-cream leading-snug">
                &ldquo;Every object tells the story of the hands that made
                it.&rdquo;
              </p>
              <cite className="mt-6 block text-xs tracking-[0.3em] uppercase text-cream/60 not-italic">
                IZZA Boutique
              </cite>
            </blockquote>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
