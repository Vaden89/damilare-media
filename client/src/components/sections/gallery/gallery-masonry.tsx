import Image from "next/image";
import "./gallery-masonry.css";
import { cn } from "@/utils/string";

export const GalleryMasonry = () => {
  const arr = Array.from({ length: 30 });

  return (
    <section className="w-full lg:px-16">
      <div className="columns-2 lg:columns-3 gap-2 sm:gap-3 p-4">
        {arr.map((_, index) => {
          const styling = cn(
            "masonry-item bg-white relative",
            index % 2 === 0 ? "h-[350px]" : "h-[200px]",
            // index % 3 === 0 ? "aspect-square" : "aspect-video",
          );

          const val = index % 2 === 0 ? 1 : 4;
          return (
            <div key={index} className={styling}>
              <Image
                src={`/images/gallery/temp-${val}.jpg`}
                alt={`Gallery Image ${index}`}
                fill
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
