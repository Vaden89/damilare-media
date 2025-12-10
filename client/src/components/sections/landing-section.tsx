import Image from "next/image";
import { DarkOverlay } from "../dark-overlay";

export const LandingSection = () => {
  return (
    <section className="w-full mb-10">
      <h1 className="font-droid text-[160px] leading-tight">
        MY WORK <sup>[5]</sup>
      </h1>

      <div className="w-full h-[500px] relative p-8 py-4 flex items-end justify-baseline">
        <Image
          src="/images/temp.jpg"
          alt="temp"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute inset-0 rounded-3xl -z-20"
        />
        <DarkOverlay />

        <div className="flex flex-col">
          <span className="font-droid text-[64px] leading-tight">
            Project 1
          </span>
          <span className="text-[32px] tracking-[-1%] font-space-grotesk">
            2025
          </span>
          <button className="bg-[#505050] px-4 py-1 rounded-full">
            Event Coverage
          </button>
        </div>
      </div>
    </section>
  );
};
