import Link from "next/link";
import Image from "next/image";
import { Navbar } from "../navbar";
import { DarkOverlay } from "../dark-overlay";
import { WordSwitch } from "../common/word-switch";

export const HeroSection = () => {
  const words = ["Photography", "Videography", "Design"];

  return (
    <section className="w-full h-svh flex flex-col justify-between pb-5 relative">
      <Image
        alt="Hero Image"
        fill
        objectFit="cover"
        src="/images/temp.jpg"
        className="-z-20"
      />
      <DarkOverlay />
      <Navbar />
      <header className="w-full flex flex-col justify-end p-4">
        <div className="flex flex-col">
          <h1 className="leading-[130%] -tracking-[1%] text-lg">
            We are Damilare Media - a creative digital media house specializing
            in
          </h1>
          <div className="text-[5rem] -tracking-wide font-oswald leading-[130%] h-fit overflow-hidden">
            <WordSwitch words={words} />
          </div>
        </div>
        <Link href="/work">
          <button className="bg-[#1F1E1E90] px-8 py-4 mt-2 rounded-full">
            Browse Projects
          </button>
        </Link>
      </header>
    </section>
  );
};
