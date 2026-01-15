export const WhatWeCreateSection = () => {
  return (
    <section className="w-full flex flex-col gap-4 px-4 sm:px-16 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <span className="font-oswald text-[40px] leading-[130%] -tracking-[2%]">
          What We Create
        </span>
        <p className="lg:text-lg">
          Damilare Media creates story-driven photo, video and design content
          for brands and individuals. From creative direction to final delivery,
          We deliver content designed to connect, perform, and represent our
          clients confidently across all platforms
        </p>
      </div>

      <div className="w-full xl:max-h-dvh xl:py-10 grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="w-full aspect-square h-full  bg-white rounded-2xl sm:row-span-2" />
        {[1, 2].map((item, index) => {
          return (
            <div
              key={index}
              className={`w-full h-full aspect-video  xl:aspect-auto bg-white rounded-2xl`}
            />
          );
        })}
      </div>
    </section>
  );
};
