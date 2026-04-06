import Link from "next/link";
import { brands } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-ink text-cream/70 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <Link href="/" className="font-serif text-3xl text-cream">
              IZZA
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              A curated boutique at IZZA Hotel, celebrating Moroccan
              craftsmanship and contemporary design.
            </p>
            <p className="mt-2 text-sm">Marrakech, Morocco</p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-cream/50 mb-6">
              Artisans
            </h4>
            <ul className="space-y-2">
              {brands
                .filter((b) => !b.isHouseBrand)
                .map((brand) => (
                  <li key={brand.slug}>
                    <Link
                      href={`/brands/${brand.slug}`}
                      className="text-sm hover:text-teal-light transition-colors"
                    >
                      {brand.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-cream/50 mb-6">
              From Our Atelier
            </h4>
            <ul className="space-y-2">
              {brands
                .filter((b) => b.isHouseBrand)
                .map((brand) => (
                  <li key={brand.slug}>
                    <Link
                      href={`/brands/${brand.slug}`}
                      className="text-sm hover:text-teal-light transition-colors"
                    >
                      {brand.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 text-xs text-cream/40">
          &copy; {new Date().getFullYear()} IZZA Boutique. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
