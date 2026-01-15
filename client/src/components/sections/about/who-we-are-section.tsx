export const WhoWeAreSection = () => {
  return (
    <section className="w-full h-full xl:h-dvh bg-background flex flex-col items-center justify-center sm:flex-row gap-4 p-4 md:px-10 lg:px-16 py-8 md:py-20">
      <div className="sm:w-1/2 flex flex-col gap-2">
        <span className="font-oswald text-[40px] sm:text-[44px] tracking-[-2%] leading-[130%]">
          At Damilare Media
        </span>
        <p className="md:text-[17px] lg:text-lg">
          We are a visual media house exploring the world through
          storytelling—capturing moments that are raw, real, and full of life.
          Our work blends authenticity with artistry to create visuals that feel
          timeless, immersive, and deeply personal.
        </p>
      </div>
      <div className="w-full md:w-1/2 aspect-square  bg-white rounded-3xl" />
    </section>
  );
};
