import React from "react";

export default function StackItem({ name }) {
  return (
    <i
      className={`fa-brands fa-${name} text-grey text-3xl m-2 hover:text-white transition-all ease-in-out duration-200`}
    ></i>
  );
}
