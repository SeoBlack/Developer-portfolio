/* eslint-disable react/prop-types */
export default function Button({
  className = "",
  width = "140px",
  minWidth = `min-${width}`,
  onClick = null,
  children,
}) {
  return (
    <div className={`outline outline-4 outline-purple relative ${width} h-10`}>
      <button
        className={`px-4 py-2  text-white font-semi-bold  transition-all ease-in-out duration-200 bottom-2 left-2 hover:bottom-0 hover:left-0 absolute ${className} ${width} ${minWidth}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
