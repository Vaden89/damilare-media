import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { LandingSection } from "@/components/sections/landing-section";
import { ProjectsSection } from "@/components/sections/projects-sections";

export default function WorkPage() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <LandingSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
