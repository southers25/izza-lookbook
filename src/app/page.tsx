import { Hero } from "@/components/home/Hero";
import { ShopIntro } from "@/components/home/ShopIntro";
import { BrandGrid } from "@/components/home/BrandGrid";
import { HouseBrandsStrip } from "@/components/home/HouseBrandsStrip";
import { BoutiqueSection } from "@/components/home/BoutiqueSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ShopIntro />
      <BrandGrid />
      <HouseBrandsStrip />
      <BoutiqueSection />
    </>
  );
}
