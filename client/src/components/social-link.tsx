"use client";
import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

export const SocialLink = ({
  link,
  icon,
  text,
}: {
  link: string;
  icon: LucideIcon;
  text: string;
}) => {
  const Icon = icon as LucideIcon;

  const containerVariants = {
    rest: {
      width: "56px",
      transition: { duration: 0.3, when: "afterChildren" },
    },
    hover: {
      width: text == "Instagram" ? "150px" : "120px",
      transition: {
        when: "beforeChildren",
      },
    },
  };

  const textVariants = {
    rest: {
      opacity: 0,
      width: "0px",
      marginLeft: 0,
    },
    hover: {
      opacity: 1,
      width: "fit-content",
      marginLeft: "12px",
    },
  };

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={containerVariants}
      className="h-14 px-4 flex items-center justify-center bg-[#1F1E1E] rounded-full overflow-hidden"
    >
      <Icon />
      <motion.span variants={textVariants}>{text}</motion.span>
    </motion.div>
  );
};
