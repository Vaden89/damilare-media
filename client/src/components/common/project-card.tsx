import Image from "next/image";

export const ProjectCard = () => {
  return (
    <div className="w-full min-h-[525px] py-8 border-t border-[#505050] grid grid-cols-2 gap-8">
      <div className="flex flex-col h-full justify-between items-start">
        <div className="flex flex-col">
          <span className="font-droid text-[64px] leading-tight">
            PROJECT 1
          </span>
          <span className="text-[32px] tracking-[-1%] font-space-grotesk">
            2025
          </span>
        </div>

        <button>Event Coverage</button>
      </div>
      <div className="w-full h-full relative grayscale hover:grayscale-0 ease-in-out transition-all duration-300 cursor-pointer">
        <Image
          src="/images/temp.jpg"
          alt="temp"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute inset-0 -z-20"
        />
      </div>
    </div>
  );
};
