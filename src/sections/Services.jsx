import Container from "../components/Container";
import ServiceCard from "../components/ServiceCard";
import { plans } from "../data/projects";
import Button from "../components/Button";

export default function Services() {
  return (
    <Container className="text-white">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-3xl text-center py-5">Services</h1>
        <div className="flex md:flex-row flex-col gap-5 md:justify-center md:items-stretch">
          {plans.map((item, i) => (
            <ServiceCard plan={item} key={i} />
          ))}
        </div>
        <div className="my-10">
          <Button className="bg-purple mx-auto" width="w-[150px]">
            Contact Me
          </Button>
        </div>
      </div>
    </Container>
  );
}
