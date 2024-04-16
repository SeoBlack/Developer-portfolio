import { useState } from "react";
import Button from "./Button";
import { IoMenu, IoClose } from "react-icons/io5";
import NavItems from "./NavItems";
import Logo from "./Logo";
import { HashLink } from "react-router-hash-link";

export default function NavMenu({ showBackground }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      {/* Desktop Menu */}
      <div className="md:flex md:justify-between md:items-center hidden">
        <Logo />
        <NavItems />
        <Button className="bg-purple" width="w-[100px]">
          <HashLink to="#contact" smooth>
            Contact
          </HashLink>
        </Button>
      </div>
      {/* Mobile menu */}
      <div className="md:hidden justify-between items-center flex relative">
        <Logo />
        <button
          onClick={handleClick}
          className={`text-white p-2 rounded-md  md:hidden inline-block text-3xl ${
            showBackground ? "bg-darkBlue" : "bg-lighterDarkBlue"
          }  ${isOpen && "rounded-b-none "}`}
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>
        <div
          className={` gap-10 w-full
            bg-lighterDarkBlue
           rounded-lg flex flex-col rounded-tr-none absolute top-10 items-center text-center overflow-hidden transition-all ease-in-out  duration-300   ${
             isOpen ? "h-[420px] py-10 " : "h-0 py-0"
           }`}
        >
          <NavItems col={true} />
          <Button className="bg-purple mt-10 " width="w-[100px]">
            Contact
          </Button>
        </div>
      </div>
    </>
  );
}
