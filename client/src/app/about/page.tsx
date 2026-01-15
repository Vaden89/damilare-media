import { Footer } from "@/components/footer";
import { AboutLandingSection } from "@/components/sections/about/about-landing-section";
import { OurApproachSection } from "@/components/sections/about/our-approach-section";
import { OurApproachSectionDesktop } from "@/components/sections/about/our-approach-section-desktop";
import { WhoWeAreSection } from "@/components/sections/about/who-we-are-section";
import { SelectedWorkSection } from "@/components/sections/selected-work";

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col">
      <AboutLandingSection />
      <WhoWeAreSection />
      <OurApproachSection />
      <OurApproachSectionDesktop />
      <SelectedWorkSection />
      <Footer />
    </main>
  );
}
