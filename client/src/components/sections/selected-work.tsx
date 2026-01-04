import Image from "next/image";
import Link from "next/link";

export const SelectedWorkSection = () => {
  return (
    <section className="w-full py-8 flex flex-col gap-4">
      <div className="flex flex-col px-4">
        <span className="font-oswald text-[40px]">Selected Work</span>
        <p className="text-lg">
          Explore the gallery to experience moments and stories brought to life
          through creativity, perspective, and emotion.
        </p>
        <Link href="/gallery"></Link>
      </div>
      <PhotoGrid />
    </section>
  );
};

const PhotoGrid = () => {
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <div className="w-full grid grid-cols-2">
      {arr.map((item, index) => (
        <div
          key={index}
          className="relative w-full aspect-square bg-black overflow-hidden"
        >
          <Image
            fill
            objectFit="cover"
            objectPosition="center"
            alt={`Selected work ${item}`}
            src={`/images/selected-works/${item}.jpg`}
          />
        </div>
      ))}
    </div>
  );
};
