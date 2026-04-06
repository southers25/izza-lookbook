import { getArtisanBrands } from "@/lib/utils";
import { BrandCard } from "./BrandCard";
import { FadeIn } from "@/components/ui/FadeIn";

export function BrandGrid() {
  const artisanBrands = getArtisanBrands();

  return (
    <section className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-4">
            The Artisans
          </h2>
          <p className="text-center text-ink-light text-sm tracking-wide max-w-lg mx-auto mb-12 md:mb-16">
            Independent makers reinterpreting Moroccan craft with a
            contemporary eye
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {artisanBrands.map((brand, i) => (
            <FadeIn key={brand.slug} delay={i * 100}>
              <BrandCard brand={brand} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
