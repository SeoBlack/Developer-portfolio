import NavMenu from "../components/NavMenu";
import Container from "../components/Container";
import { useDetectScroll } from "../hooks/useDetectScroll";
import GoUpButton from "../components/GoUpButton";
export default function Header() {
  const topOffset = 50; // scrolling 50 pixles &&  change navbar color and show the go up button
  const { isReached } = useDetectScroll(topOffset);
  return (
    <div
      className={` ${
        isReached && "bg-lighterDarkBlue"
      } sticky top-0 z-[999] transition-colors ease-in-out duration-200`}
    >
      <Container className="relative" id="header">
        <NavMenu showBackground={isReached} />
        {isReached && <GoUpButton />}
      </Container>
    </div>
  );
}
