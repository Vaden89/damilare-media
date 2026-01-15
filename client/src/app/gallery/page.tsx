import { Navbar } from "@/components/navbar";
import { GalleryMasonry } from "@/components/sections/gallery/gallery-masonry";

export default function GalleryPage() {
  return (
    <div>
      <LandingSection />
      <GalleryMasonry />
    </div>
  );
}

const LandingSection = () => {
  return (
    <section className="w-full flex flex-col h-[40vh] sm:h-[50vh]">
      <Navbar />
      <header className="h-full flex-1 flex flex-col gap-4 sm:gap-8 justify-center items-center">
        <h1 className="font-oswald text-[80px] sm:text-[120px] tracking-tighter leading-[100%]">
          GALLERY
        </h1>
        <p className="text-lg sm:text-xl tracking-tight text-center px-4">
          Blending cinematic storytelling, authentic moments, and the timeless
          beauty of crafted visuals.
        </p>
      </header>
    </section>
  );
};
