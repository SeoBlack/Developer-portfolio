import { FaHandPointUp } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
export default function GoUpButton() {
  return (
    <HashLink
      to="#"
      smooth
      className="bg-purple/60 text-white rounded-xl p-2 text-3xl absolute top-[90vh] right-8 hover:bg-purple transition-all ease-in-out duration-200"
    >
      <FaHandPointUp />
    </HashLink>
  );
}
