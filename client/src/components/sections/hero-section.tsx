import Image from "next/image";
import { Navbar } from "../navbar";
import { DarkOverlay } from "../dark-overlay";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="w-full h-svh flex flex-col pb-5 relative">
      <Image
        alt="Hero Image"
        fill
        objectFit="cover"
        src="/images/temp.jpg"
        className="-z-20"
      />
      <DarkOverlay />
      <Navbar />
      <div className="w-full h-full flex flex-col justify-end p-4">
        <div className="flex flex-col">
          <p className="leading-[130%] -tracking-[1%] text-lg">
            We are Damilare Media - a creative digital media house specializing
            in
          </p>
          <span className="text-[5rem] -tracking-wide font-oswald leading-[130%]">
            Photography
          </span>
        </div>
        <Link href="/work">
          <button className="bg-[#1F1E1E90] px-8 py-4 rounded-full">
            Browse Projects
          </button>
        </Link>
      </div>
    </section>
  );
};
