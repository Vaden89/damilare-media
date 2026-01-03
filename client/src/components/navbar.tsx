"use client";
import Image from "next/image";
import { NavLink, NavLink2 } from "./nav-link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, Variant, Variants } from "motion/react";
import { ArrowRight, Menu } from "lucide-react";
import { menu } from "@/data/menu";
import { socialData } from "@/data/social";
import { SocialLink } from "./social-link";

export const Navbar = () => {
  return (
    <nav className="w-full h-24 px-4 sm:px-6 flex items-center justify-between">
      <Image src="/images/logo.png" alt="Logo" width={24} height={24} />
      <DesktopMenu />
      <MobileMenu />
    </nav>
  );
};

const DesktopMenu = () => {
  return (
    <ul className="hidden text-sm sm:flex gap-8">
      {menu.map((item, index) => (
        <NavLink key={index} link={item.path}>
          {item.name}
        </NavLink>
      ))}
    </ul>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to ensure scroll is restored if component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuVariants: Variants = {
    initial: { width: 0 },
    animate: {
      width: "100%",
      transition: {
        ease: "easeInOut",
        delayChildren: 0.25,
        staggerChildren: 0.1,
      },
    },
    exit: {
      width: 0,
    },
  };

  return (
    <>
      <div className="sm:hidden">
        <button
          onClick={() => setIsOpen((p) => !p)}
          className="bg-[#1F1E1E] min-h-10 min-w-14 flex items-center justify-center rounded-full relative z-40"
        >
          <ArrowRight
            className={`${isOpen && "rotate-180"} transition-all duration-300 ease-in-out`}
          />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="bg-black w-full h-full flex flex-col justify-between pb-18 fixed top-0 right-0 pt-20"
          >
            <div className="p-4 border-t border-[#505050]">
              <ul className="flex flex-col gap-6">
                {menu.map((item, index) => (
                  <NavLink2 key={index} name={item.name} path={item.path} />
                ))}
              </ul>
            </div>
            <div className="w-full flex justify-between px-4">
              {socialData.map((item, index) => {
                return (
                  <SocialLink
                    icon={item.icon}
                    link={item.link}
                    text={item.text}
                    key={index}
                  />
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
