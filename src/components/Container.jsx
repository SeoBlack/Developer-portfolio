import React from "react";

export default function Container({ children, className = "" }) {
  return (
    <div
      className={`md:px-20 px-8 md:py-8 py-6 max-w-[1400px]  mx-auto ${className}`}
    >
      {children}
    </div>
  );
}
