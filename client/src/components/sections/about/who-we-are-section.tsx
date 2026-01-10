export const WhoWeAreSection = () => {
  return (
    <section className="w-full xl:w-[1200px] flex flex-col sm:flex-row sm:items-center p-4 md:p-10 lg:px-16 xl:py-16 gap-4 xl:gap-10 sm:mx-auto">
      <div className="md:w-1/2 flex flex-col gap-2 ">
        <span className="font-oswald text-[40px] sm:text-[44px] tracking-[-2%] leading-[130%]">
          We are Damilare Media
        </span>
        <p className="sm:text-lg leading-[130%] tracking-[-1%]">
          We are a visual media house exploring the world through
          storytelling—capturing moments that are raw, real, and full of life.
          Our work blends authenticity with artistry to create visuals that feel
          timeless, immersive, and deeply personal.
        </p>
      </div>
      <div className="md:w-1/2 aspect-square  bg-white rounded-3xl" />
    </section>
  );
};
