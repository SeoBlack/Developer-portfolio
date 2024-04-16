import Container from "../components/Container";
import ServiceCard from "../components/ServiceCard";
import { plans } from "../data/projects";
import Button from "../components/Button";
import { HashLink } from "react-router-hash-link";

export default function Services() {
  return (
    <Container className="text-white" id="services">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-3xl text-center py-5">Services</h1>
        <div className="flex md:flex-row flex-col gap-5 md:justify-center md:items-stretch">
          {plans.map((item, i) => (
            <ServiceCard plan={item} key={i} />
          ))}
        </div>
        <div className="my-10">
          <Button className="bg-purple mx-auto" width="w-[150px]">
            <HashLink to="#contact" smooth>
              Contact Me
            </HashLink>
          </Button>
        </div>
      </div>
    </Container>
  );
}
