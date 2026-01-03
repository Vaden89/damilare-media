"use client";
import Link from "next/link";
import { cn } from "@/utils/string";
import { motion, Variants } from "motion/react";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";

export const NavLink = ({
  children,
  link,
}: {
  children: ReactNode;
  link: string;
}) => {
  const [hovering, setIsHovering] = useState(false);

  return (
    <div
      onMouseOver={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link href={link} className="font-space-grotesk">
        {children}
      </Link>
      <motion.div
        animate={hovering ? { width: "100%" } : { width: 0 }}
        className="h-0.5 bg-white"
      />
    </div>
  );
};

export const NavLink2 = ({ name, path }: { name: string; path: string }) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  const linkVariants: Variants = {
    initial: {
      opacity: 0,
      x: 30,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: 10,
    },
  };

  return (
    <motion.div variants={linkVariants}>
      <Link
        href={path}
        className={cn(
          "flex items-center gap-8",
          isActive ? "text-white" : "text-[#505050]",
        )}
      >
        <div className={`w-2 h-2 rounded-full ${isActive && "bg-white"}`} />
        <span className="text-[32px]">{name}</span>
      </Link>
    </motion.div>
  );
};
