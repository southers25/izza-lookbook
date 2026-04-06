import { shopIntro } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";

export function ShopIntro() {
  return (
    <section className="py-24 md:py-32 px-6">
      <FadeIn>
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif text-xl md:text-2xl leading-relaxed text-ink/90">
            {shopIntro.description}
          </p>
          <div className="mt-12 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-teal/30" />
            <span className="text-teal text-xs tracking-[0.3em] uppercase">
              Marrakech
            </span>
            <span className="h-px w-12 bg-teal/30" />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
