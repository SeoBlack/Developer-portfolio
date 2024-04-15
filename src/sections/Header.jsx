import NavMenu from "../components/NavMenu";
import Container from "../components/Container";
import { useDetectScroll } from "../hooks/useDetectScroll";
export default function Header() {
  const { showBackground } = useDetectScroll();
  return (
    <div
      className={` ${
        showBackground && "bg-lighterDarkBlue"
      } sticky top-0 z-[999] transition-colors ease-in-out duration-200`}
    >
      <Container>
        <NavMenu showBackground={showBackground} />
      </Container>
    </div>
  );
}
