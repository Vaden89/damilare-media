"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

export const WordSwitch = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);

  const memoizedWords = useMemo(() => words, [words]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % memoizedWords.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [memoizedWords]);

  return (
    <AnimatePresence mode="wait">
      <motion.p
        key={memoizedWords[index]}
        exit={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {memoizedWords[index]}
      </motion.p>
    </AnimatePresence>
  );
};
