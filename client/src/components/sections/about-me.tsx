export const AboutMeSection = () => {
  return (
    <section className="w-full h-full sm:h-dvh bg-background flex flex-col items-center justify-center sm:flex-row gap-4 p-4 py-8">
      <div className="flex flex-col">
        <span className="font-oswald text-[40px] leading-[130%] -tracking-[2%]">
          About Me
        </span>
        <p className="sm:w-[540px] sm:text-lg leading-[130%] -tracking-[1%] font-space-grotesk">
          I&apos;m a lifestyle photographer exploring the world with my
          camera—seeking out the raw, real, and adventurous moments that make
          life unforgettable. My work blends authenticity with artistry to
          create images that feel both timeless and deeply personal.
        </p>
      </div>
      <div className="bg-white w-full sm:w-1/3 h-[442px] sm:h-4/5 rounded-2xl"></div>
    </section>
  );
};
