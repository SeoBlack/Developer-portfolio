import { HashLink } from "react-router-hash-link";
import NavItem from "./NavItem";
export default function NavItems({ col }) {
  return (
    <ul className={`flex gap-8 ${col && "flex-col"}`}>
      <NavItem>
        {" "}
        <HashLink to="#hero" smooth>
          Home
        </HashLink>
      </NavItem>
      <NavItem>
        {" "}
        <HashLink to="#about" smooth>
          About me
        </HashLink>
      </NavItem>
      <NavItem>
        {" "}
        <HashLink to="#portfolio" smooth>
          Portfolio
        </HashLink>
      </NavItem>
      <NavItem>
        {" "}
        <HashLink to="#services" smooth>
          Services
        </HashLink>
      </NavItem>
      <NavItem>
        {" "}
        <HashLink to="#experience" smooth>
          Experience
        </HashLink>
      </NavItem>
    </ul>
  );
}
