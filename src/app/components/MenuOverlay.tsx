import { NavLinkProps } from "../types/LinkProps";
import { NavLink } from "./NavLink";

type MenuOverlayProps = {
  links: NavLinkProps[]
}

export const MenuOverlay = ({ links }: MenuOverlayProps) => {
  return (
    <ul>
      {
        links.map((link, index) => (
          <li key={index}>
            <NavLink path={link.path} title={link.title}/>
          </li>
        ))
      }
    </ul>
  );
};
