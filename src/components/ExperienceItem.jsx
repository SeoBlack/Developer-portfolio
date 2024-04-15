/* eslint-disable react/prop-types */
import React from "react";

export default function ExperienceItem({ item }) {
  return (
    <div className="md:w-1/5 w-1/3 flex flex-col gap-3 items-center justify-center ">
      <div className="w-[30%]">
        <img src={item.image} alt={item.name} />
      </div>
      <p className="text-white">{item.name}</p>
    </div>
  );
}
