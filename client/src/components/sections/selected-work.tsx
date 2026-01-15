import Image from "next/image";
import Link from "next/link";

export const SelectedWorkSection = () => {
  return (
    <section className="w-full md:px-10 lg:px-16 py-8 flex flex-col gap-4">
      <div className="flex flex-col px-4 md:px-0">
        <span className="font-oswald text-[40px]">Selected Work</span>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <p className="sm:text-lg md:w-2/3 xl:w-1/2">
            Explore the gallery to experience moments and stories brought to
            life through creativity, perspective, and emotion.
          </p>
          <Link href="/gallery">
            <button className="px-4 py-2 bg-[#1F1E1E] rounded-full">
              Explore Gallery
            </button>
          </Link>
        </div>
      </div>
      <PhotoGrid />
    </section>
  );
};

const PhotoGrid = () => {
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3">
      {arr.map((item, index) => (
        <div
          key={index}
          className="relative w-full aspect-square bg-black overflow-hidden"
        >
          <Image
            fill
            className="object-cover"
            alt={`Selected work ${item}`}
            src={`/images/selected-works/${item}.jpg`}
          />
        </div>
      ))}
    </div>
  );
};
