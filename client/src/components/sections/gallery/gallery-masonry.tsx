import "./gallery-masonry.css";
import { cn } from "@/utils/string";

export const GalleryMasonry = () => {
  const arr = Array.from({ length: 30 });

  return (
    <section className="w-full mt-12 lg:px-16">
      <div className="columns-2 md:columns-3 gap-2 sm:gap-6 p-4">
        {arr.map((_, index) => {
          const styling = cn(
            "masonry-item bg-white",
            index % 2 === 0 ? "h-[300px]" : "h-[200px]",
          );
          return <div key={index} className={styling}></div>;
        })}
      </div>
    </section>
  );
};
