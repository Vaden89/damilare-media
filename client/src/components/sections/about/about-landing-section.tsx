import { DarkOverlay } from "@/components/dark-overlay";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

export const AboutLandingSection = () => {
  return (
    <section className="w-full h-[40vh] xl:h-[80vh] flex flex-col relative">
      <Navbar />
      <Image
        fill
        alt="about-image"
        src="/images/temp.jpg"
        className="-z-10 grayscale object-cover"
      />
      <DarkOverlay />
      <header className="flex-1 flex flex-col items-center justify-center ">
        <h1 className="capitalize font-oswald text-[72px] -tracking-[4%]">
          About Us
        </h1>
      </header>
    </section>
  );
};
