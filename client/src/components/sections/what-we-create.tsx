export const WhatWeCreateSection = () => {
  return (
    <section className="w-full flex flex-col gap-4 px-4 py-8">
      <span className="font-oswald text-[40px] leading-[130%] -tracking-[2%]">
        What We Create
      </span>
      <p className="">
        We create visual work across photography, videography, and graphic
        design—crafting stories for people, places, and brands with intention
        and authenticity. Our work captures real moments and thoughtful
        compositions that communicate meaning, emotion, and identity in a
        timeless, cohesive way.
      </p>
      <div className="flex flex-col gap-2">
        {[1, 2].map((item, index) => {
          return (
            <div
              key={index}
              className="w-full aspect-square bg-white rounded-2xl"
            ></div>
          );
        })}
      </div>
    </section>
  );
};
