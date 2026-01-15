"use client";
import Image from "next/image";
import { DarkOverlay } from "../dark-overlay";
import { useState } from "react";
import { cn } from "@/utils/string";

interface FilterOption {
  label: string;
  value: string;
}

const FILTER_OPTIONS: FilterOption[] = [
  { label: "All", value: "all" },
  { label: "Photography", value: "photography" },
  { label: "Videography", value: "videography" },
  { label: "Graphics Design", value: "graphics-design" },
];

export const LandingSection = () => {
  const [filter, setFilter] = useState("all");

  return (
    <section className="w-full flex flex-col gap-4 my-10 sm:my-5 px-4">
      <header>
        <h1 className="font-oswald text-[48px] leading-[130%] -tracking-[1.5%]">
          Featured Projects <sup className="text-3xl">[5]</sup>
        </h1>
      </header>

      <WorkFilter activeValue={filter} onSelect={setFilter} />

      <div className="w-full h-[500px] relative md:p-2 lg:p-8 py-4 flex items-end justify-baseline overflow-hidden rounded-3xl">
        <Image
          src="/images/temp.jpg"
          alt="Featured project background"
          fill
          priority
          className="absolute inset-0 object-cover object-center -z-20"
        />
        <DarkOverlay />

        <div className="flex flex-col gap-2 p-4 items-start">
          <div>
            <span className="block font-oswald text-[56px] leading-tight text-white">
              Project 1
            </span>
            <span className="text-[24px] tracking-[-1%] text-white/80">
              2025
            </span>
          </div>
          <button>
            <span className="bg-[#505050] text-white px-4 py-2 rounded-full text-sm">
              Event Coverage
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

const WorkFilter = ({
  activeValue,
  onSelect,
}: {
  activeValue: string;
  onSelect: (val: string) => void;
}) => {
  return (
    <div className="w-full flex gap-2 overflow-x-auto hide-scroll">
      {FILTER_OPTIONS.map((option) => {
        const isActive = activeValue === option.value;

        return (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className={cn(
              "shrink-0 px-4 py-2 rounded-full text-sm transition-colors",
              isActive
                ? "bg-[#292929] text-white"
                : "bg-[#141313] text-[#505050] hover:text-white",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};
