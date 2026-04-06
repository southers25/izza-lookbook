import Image from "next/image";
import { siteImages, shopIntro } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src={`/images/${siteImages.hero}.jpg`}
        alt="IZZA Boutique archway leading into the curated shop space"
        fill
        sizes="100vw"
        className="object-cover"
        preload={true}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-serif text-7xl md:text-9xl text-cream tracking-tight">
          {shopIntro.title}
        </h1>
        <p className="mt-4 text-sm md:text-base tracking-[0.3em] uppercase text-cream/80">
          {shopIntro.tagline}
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.3em] uppercase text-cream/50">
          Scroll
        </span>
        <div className="w-px h-8 bg-cream/30 animate-pulse" />
      </div>
    </section>
  );
}
