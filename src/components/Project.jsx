/* eslint-disable react/prop-types */
import { FaHandPointRight } from "react-icons/fa";
import StackList from "./StackList";
export default function Project({ reverse = false, item }) {
  const { id, title, description, link, image, stack } = item;
  console.log(id);
  return (
    <div
      className={`flex flex-col w-full ${
        reverse ? "md:flex-row-reverse " : "md:flex-row "
      } md:flex md:justify-between gap-10 py-10 `}
    >
      <div className="md:w-1/2 w-full flex-col justify-between h-full">
        <div>
          <h1 className="text-2xl font-bold text-cyan pb-2">Project {id}</h1>
          <h1 className="text-1xl py-2">{title}</h1>
          <p className="text-grey py-2 leading-5">{description}</p>
          <StackList stack={stack} />
        </div>
        <div className="flex gap-5 w-[38%] py-4 items-center transition-all ease-in-out duration-300 hover:gap-10 hover:text-cyan">
          <p className="">See it Live </p>
          <span>
            <FaHandPointRight />
          </span>
        </div>
      </div>
      <div className="md:w-1/2 w-full">
        <div className="bg-gradient-to-r from-cyan to-purple ">
          <div className=" w-full h-[300px]  relative rounded-sm">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover absolute bottom-2 left-2 transition-all ease-in-out duration-200 hover:bottom-0 hover:left-0 rounded-sm "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
