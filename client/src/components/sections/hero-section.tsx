import Image from "next/image";
import { Navbar } from "../navbar";
import { DarkOverlay } from "../dark-overlay";

export const HeroSection = () => {
  return (
    <section className="w-full h-dvh flex flex-col relative pb-5">
      <Image
        layout="fill"
        alt="Hero Image"
        objectFit="cover"
        objectPosition="cover"
        src="/images/temp.jpg"
        className="-z-20"
      />
      <DarkOverlay />
      <Navbar />
      <div className="px-5 flex w-full h-full items-end justify-between">
        <div className="flex flex-col">
          <p className="text-xl font-sans">Hi, we are damilare media a</p>
          <span className="text-[144px] leading-[100%] font-droid">
            Digital Photographer
          </span>
        </div>
        <div className="pb-4">
          <button className="px-2 py-2 bg-[#33333380] rounded-lg">
            Explore work
          </button>
        </div>
      </div>
    </section>
  );
};
