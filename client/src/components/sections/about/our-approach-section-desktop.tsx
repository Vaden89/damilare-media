"use client";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";
import { ourArroach } from "@/data/our-approach";

export const OurApproachSectionDesktop = () => {
  const [viewportW, setViewportW] = useState(0);
  const [scrollRange, setScrollRange] = useState(0);
  const scrollRef = useRef<null | HTMLDivElement>(null);
  const ghostRef = useRef<null | HTMLDivElement>(null);
  const containerRef = useRef<null | HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useLayoutEffect(() => {
    const updateMeasurements = () => {
      if (scrollRef.current) {
        setScrollRange(scrollRef.current.scrollWidth);
        setViewportW(window.innerWidth);
      }
    };

    updateMeasurements();
    window.addEventListener("resize", updateMeasurements);
    return () => window.removeEventListener("resize", updateMeasurements);
  }, []);

  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW],
  );

  const spring = useSpring(transform, physics);

  return (
    <div className="hidden sm:block" ref={containerRef}>
      <div className="scroll-container">
        <motion.div
          ref={scrollRef}
          style={{ x: spring }}
          className="cards-container"
        >
          <div className="cards">
            <div className="mr-10">
              <span className="font-oswald text-[120px] font-extrabold leading-[90%]">
                HOW WE <br /> APPROACH
              </span>
            </div>
            {ourArroach.map((item, index) => (
              <Card key={index} step={index + 1} {...item} />
            ))}
          </div>
        </motion.div>
      </div>
      <div
        ref={ghostRef}
        style={{
          height: scrollRange,
        }}
      />
    </div>
  );
};

const Card = ({
  step,
  title,
  subText,
}: {
  step: number;
  title: string;
  subText: string;
}) => {
  return (
    <div className="card">
      <div className="flex items-baseline gap-2">
        <span className="font-oswald text-2xl">STEP {step}</span>
        <div className="w-1.5 h-1.5 bg-orange-500" />
      </div>
      <div className="flex flex-col h-[224px] gap-5">
        <span className="text-5xl font-oswald h-[96px]">{title}</span>
        <p className="text-[#808080] text-lg font-bold">{subText}</p>
      </div>
    </div>
  );
};
