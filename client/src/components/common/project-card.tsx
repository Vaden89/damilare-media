import Image from "next/image";

export const ProjectCard = () => {
  return (
    <div className="w-full py-8 border-t border-[#505050] grid grid-cols-1 gap-8">
      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <span className="font-oswald text-[48px] leading-tight">
            PROJECT 1
          </span>
          <span className="text-2xl tracking-[-1%] font-space-grotesk">
            2025
          </span>
        </div>
        <button className="px-4 py-2 rounded-full bg-[#505050] text-xs">
          Event Coverage
        </button>
      </div>
      <div className="w-full aspect-square relative grayscale hover:grayscale-0 ease-in-out transition-all duration-300 cursor-pointer">
        <Image
          src="/images/temp.jpg"
          alt="temp"
          fill
          objectFit="cover"
          className="absolute inset-0 -z-20"
        />
      </div>
    </div>
  );
};
