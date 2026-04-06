import { getRelatedBrands } from "@/lib/utils";
import { BrandCard } from "@/components/home/BrandCard";
import { FadeIn } from "@/components/ui/FadeIn";
import type { Brand } from "@/lib/types";

interface RelatedBrandsProps {
  brand: Brand;
}

export function RelatedBrands({ brand }: RelatedBrandsProps) {
  const related = getRelatedBrands(brand, 3);

  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-cream-dark">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-12">
            Also at IZZA
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {related.map((b, i) => (
            <FadeIn key={b.slug} delay={i * 100}>
              <BrandCard brand={b} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
