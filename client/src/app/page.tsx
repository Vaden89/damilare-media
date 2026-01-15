import { Footer } from "@/components/footer";
import { AboutMeSection } from "@/components/sections/about-me";
import { HeroSection } from "@/components/sections/hero-section";
import { SelectedWorkSection } from "@/components/sections/selected-work";
import { WhatWeCreateSection } from "@/components/sections/what-we-create";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutMeSection />
      <WhatWeCreateSection />
      <SelectedWorkSection />
      <Footer />
    </main>
  );
}
