import Header from "./Header";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Experience from "./Experience";
import Contact from "./Contact";

export default function AppLayout() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Portfolio />
      <Services />
      <Experience />
      <Contact />
    </div>
  );
}
