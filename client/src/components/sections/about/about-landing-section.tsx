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
        objectPosition="center"
        className="-z-10 grayscale object-cover"
      />
      <DarkOverlay />
      <div className="flex-1 flex flex-col items-center justify-center ">
        <span className="capitalize font-oswald text-[72px] -tracking-[4%]">
          About Us
        </span>
      </div>
    </section>
  );
};
