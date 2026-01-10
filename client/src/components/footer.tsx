"use client";
import Image from "next/image";
import { SocialLink } from "./social-link";
import { socialData } from "@/data/social";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col gap-10 items-center justify-between pt-10 pb-5 px-4 md:px-10 lg:px-16 text-center">
      <div className="w-full sm:h-[376px] sm:aspect-auto aspect-video relative">
        <Image fill src="/images/temp-2.jpg" alt="" className="rounded-4xl" />
      </div>
      <div className="flex flex-col gap-10">
        <h2 className="text-[48px] sm:text-[96px] font-oswald text-white leading-tight">
          CONNECT WITH ME ANYWHERE
        </h2>

        <div className="w-full flex justify-between items-center ">
          {socialData.map((social, index) => (
            <SocialLink
              key={index}
              icon={social.icon}
              text={social.text}
              link={social.link}
            />
          ))}
        </div>
      </div>
      {/*<div className="w-full text-sm flex items-center justify-between">
        <span>Copyright© 2025 Daniel Skipii</span>
        <span>Work with us today</span>
      </div>*/}
    </footer>
  );
};
