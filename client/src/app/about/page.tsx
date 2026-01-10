import { Footer } from "@/components/footer";
import { AboutLandingSection } from "@/components/sections/about/about-landing-section";
import { OurApproachSection } from "@/components/sections/about/our-approach-section";
import { WhoWeAreSection } from "@/components/sections/about/who-we-are-section";
import { SelectedWorkSection } from "@/components/sections/selected-work";

export default function AboutPage() {
  return (
    <div>
      <AboutLandingSection />
      <WhoWeAreSection />
      <OurApproachSection />
      <SelectedWorkSection />
      <Footer />
    </div>
  );
}
