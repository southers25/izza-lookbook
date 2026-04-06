import type { Brand } from "@/lib/types";

interface BrandMetaProps {
  brand: Brand;
}

export function BrandMeta({ brand }: BrandMetaProps) {
  const items = [
    brand.categoryLabel,
    brand.material,
    brand.founder && brand.founder !== "IZZA Brand" ? `By ${brand.founder}` : null,
  ].filter(Boolean);

  return (
    <div className="py-6 md:py-8 px-6 md:px-10 border-b border-ink/10">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-2">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-6">
            {i > 0 && (
              <span className="text-ink/20 hidden sm:inline">&middot;</span>
            )}
            <span className="text-xs tracking-[0.2em] uppercase text-ink-light">
              {item}
            </span>
          </span>
        ))}

        {brand.instagram && (
          <a
            href={brand.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-xs tracking-[0.2em] uppercase text-teal hover:text-teal-light transition-colors"
          >
            Instagram
          </a>
        )}
      </div>
    </div>
  );
}
