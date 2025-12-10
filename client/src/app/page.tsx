import { Footer } from "@/components/footer";
import { AboutMeSection } from "@/components/sections/about-me";
import { HeroSection } from "@/components/sections/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <Footer />
    </>
  );
}
