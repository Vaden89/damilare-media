import { Navbar } from "@/components/navbar";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCoveragePage() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Link href="/work">
        <button className="flex items-center gap-2 ml-4 mt-6">
          <ArrowLeft size={20} />
          Back
        </button>
      </Link>
      <LandingSection />
    </div>
  );
}

const LandingSection = () => {
  return (
    <section className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 mt-8">
      <div className="flex flex-col h-full gap-8 sm:justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-oswald leading-[130%] -tracking-[2%]">
            PROJECT 6
          </h1>
          <p className="text-lg">
            This is a project description, used to describe the project. The
            description describes the project so that anyone can describe what
            the project is by reading the description
          </p>
        </div>
        <div className="flex flex-col text-lg">
          <div className="flex items-center gap-4">
            <span className="w-[90px]">Client</span>
            <span>Isaac Shosanya</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-[90px]">Tag</span>
            <span>Photography</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-[90px]">Year</span>
            <span>2025</span>
          </div>
        </div>
      </div>
      <div className="w-full aspect-square relative">
        <Image
          src="/images/temp-3.jpg"
          alt="Project 6"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};
