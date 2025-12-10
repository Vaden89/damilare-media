import { Menu } from "lucide-react";
import { NavLink } from "./nav-link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="w-full h-24 px-4 sm:px-6 flex items-center justify-between">
      <Image src="/images/logo.png" alt="Logo" width={24} height={24} />
      <DesktopMenu />
      <MobileMenu />
    </nav>
  );
};

const DesktopMenu = () => {
  return (
    <ul className="hidden text-sm sm:flex gap-8">
      <NavLink link="#">Home</NavLink>
      <NavLink link="#">About me</NavLink>
      <NavLink link="#">Portfolio</NavLink>
      <NavLink link="#">Gallery</NavLink>
    </ul>
  );
};

const MobileMenu = () => {
  return (
    <div className="sm:hidden">
      <Menu />
    </div>
  );
};
