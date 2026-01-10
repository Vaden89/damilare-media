"use client";

import { MotionValue, useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

export const OurApproachSection = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const approach = [
    {
      title: "Understand Vision",
      subText:
        "We explore your goals to create a clear and concise vision statement.",
    },
    {
      title: "Define Objectives",
      subText: "We break down your vision into measurable objectives.",
    },
    {
      title: "Develop Strategy",
      subText: "We create a roadmap to achieve your objectives.",
    },
    {
      title: "Execute Plan",
      subText: "We implement your strategy and monitor progress.",
    },
    {
      title: "Review & Adjust",
      subText: "We regularly review and adjust your plan to ensure success.",
    },
  ];

  return (
    <section className="w-full flex flex-col sm:flex-row gap-4 px-4 md:px-10 lg:px-16 my-5 mb-20 ">
      <span className="text-[40px] leading-[130%] tracking-[-2%] font-oswald shrink-0">
        Our Approach
      </span>
      <div ref={container} className="w-full flex flex-col">
        {approach.map((item, index) => {
          const targetScale = 1 - (approach.length - index) * 0.03;

          return (
            <Card
              key={index}
              step={index + 1}
              title={item.title}
              subText={item.subText}
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

const Card = ({
  step,
  title,
  subText,
  progress,
  range,
  targetScale,
}: {
  step: number;
  title: string;
  subText: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-0 pt-5">
      <motion.div
        className="w-full h-[450px] flex flex-col justify-between border border-[#808080] bg-background p-4 origin-top relative"
        style={{
          scale,
          top: `calc(-20px + ${step * 20}px)`,
        }}
      >
        <div className="flex items-baseline gap-2">
          <span className="font-oswald text-2xl">STEP {step}</span>
          <div className="w-1.5 h-1.5 bg-orange-500" />
        </div>
        <div className="flex flex-col">
          <span className="text-5xl font-oswald leading-[130%]">{title}</span>
          <p className="text-[#808080] text-sm">{subText}</p>
        </div>
      </motion.div>
    </div>
  );
};
