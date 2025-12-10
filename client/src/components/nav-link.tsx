"use client";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { motion } from "motion/react";

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
