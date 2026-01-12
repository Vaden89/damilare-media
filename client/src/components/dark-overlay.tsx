import { cn } from "@/utils/string";

export const DarkOverlay = ({ darker }: { darker?: boolean }) => {
  const styling = cn(
    "absolute inset-0 bg-black opacity-50 -z-10",
    darker && "opacity-70",
  );

  return <div className={styling}></div>;
};
