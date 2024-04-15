import NavItem from "./NavItem";
export default function NavItems({ col }) {
  return (
    <ul className={`flex gap-8 ${col && "flex-col"}`}>
      <NavItem>Home</NavItem>
      <NavItem>About Me</NavItem>
      <NavItem>Portfolio</NavItem>
      <NavItem>Services</NavItem>
      <NavItem>Experience</NavItem>
    </ul>
  );
}
