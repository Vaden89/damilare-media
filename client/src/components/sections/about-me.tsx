export const AboutMeSection = () => {
  return (
    <section className="w-full h-full lg:h-dvh bg-background flex flex-col items-center justify-center sm:flex-row gap-4 p-4 md:px-10 lg:px-16 py-8 md:py-20">
      <div className="sm:w-1/2 flex flex-col">
        <span className="font-oswald text-[40px] sm:text-[44px] leading-[130%] -tracking-[2%]">
          About Me
        </span>
        <p className="lg:text-lg">
          Damilare Media is a creative studio focused on intentional visual
          storytelling. Our approach to our work across all media forms has been
          and is driven by a deep appreciation for storytelling. I believe in
          continuous growth and exploring new and different ways of doing
          things. We prioritise real moments not just aesthetics. We’re all
          about direction, narratives and outcomes.
        </p>
      </div>
      <div className="bg-white w-full sm:w-1/2 h-[442px] sm:aspect-square rounded-2xl"></div>
    </section>
  );
};
