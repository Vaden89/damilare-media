import Image from "next/image";

export const ProjectCard = () => {
  return (
    <div className="w-full h-fit py-8 border-t border-[#505050] grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="w-full flex flex-col">
        <span className="font-oswald text-[48px] leading-tight">PROJECT 1</span>
        <div className="w-full sm:h-full flex sm:flex-col sm:items-start items-center justify-between">
          <span className="text-2xl tracking-[-1%] font-space-grotesk">
            2025
          </span>
          <button className="px-4 py-2 rounded-full bg-[#505050] text-xs">
            Event Coverage
          </button>
        </div>
      </div>
      <div className="w-full aspect-video relative sm:grayscale hover:grayscale-0 ease-in-out transition-all duration-300 cursor-pointer">
        <Image
          src="/images/temp.jpg"
          alt="temp"
          fill
          objectFit="cover"
          className="absolute"
        />
      </div>
    </div>
  );
};
