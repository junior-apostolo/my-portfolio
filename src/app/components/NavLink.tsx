import Link from "next/link";
import { NavLinkProps } from "../types/LinkProps";

export const NavLink = ({ path, title }: NavLinkProps) => {
  return (
    <Link
      className="block py-2 pl-3 pr-4 text-[#adb7be] sm:text-xl rounded md:p-0 hover:text-white"
      href={path}
    >
      {title}
    </Link>
  );
};
