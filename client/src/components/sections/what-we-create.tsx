export const WhatWeCreateSection = () => {
  return (
    <section className="w-full flex flex-col gap-4 px-4 sm:px-16 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <span className="font-oswald text-[40px] leading-[130%] -tracking-[2%]">
          What We Create
        </span>
        <p className="sm:text-lg">
          We create visual work across photography, videography, and graphic
          design—crafting stories for people, places, and brands with intention
          and authenticity. Our work captures real moments and thoughtful
          compositions that communicate meaning, emotion, and identity in a
          timeless, cohesive way.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="w-full aspect-square sm:aspect-auto h-full  bg-white rounded-2xl sm:row-span-2" />
        {[1, 2].map((item, index) => {
          return (
            <div
              key={index}
              className={`w-full aspect-video bg-white rounded-2xl`}
            />
          );
        })}
      </div>
    </section>
  );
};
