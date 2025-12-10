"use client";
import { Instagram, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import { SocialLink } from "./social-link";

export const Footer = () => {
  const socialData = [
    {
      icon: Instagram,
      text: "Instagram",
      link: "https://instagram.com/daniel.skipii",
    },
    {
      icon: Twitter,
      text: "Twitter",
      link: "https://twitter.com/daniel.skipii",
    },
    {
      icon: Mail,
      text: "Email",
      link: "mailto:daniel.skipii@gmail.com",
    },
    {
      icon: Instagram, // Assuming another Instagram link, or this could be a different social link
      text: "Instagram",
      link: "https://instagram.com/daniel.skipii",
    },
  ];

  return (
    <footer className="w-full flex flex-col min-h-dvh gap-5 items-center justify-between pt-10 pb-5 px-5">
      <Image
        width={1300}
        height={376}
        src="/images/temp-2.jpg"
        className="w-full h-1/3 rounded-4xl"
        alt=""
      />
      <div className="w-fit">
        <h2 className="text-[144px] font-droid leading-tight">
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
