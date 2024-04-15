export default function NavItem({ children }) {
  return (
    <li
      className={` text-white transition-all ease-in-out duration-150  hover:text-cyan hover:cursor-pointer group `}
    >
      {children}
      <div className="bg-cyan w-0 h-0 transition-all ease-in-out duration-200 group-hover:w-[100%] group-hover:h-[1px]"></div>
    </li>
  );
}
