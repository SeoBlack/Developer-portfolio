import Button from "../components/Button";
import Container from "../components/Container";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <Container>
      <div className="flex pt-12  items-center md:flex-row flex-col-reverse">
        <div className="flex flex-col justify-between text-center items-center md:text-left md:w-[40%] md:items-start   ">
          <div className="flex flex-col gap-5">
            {/* <h1 className="text-2xl text-grey">Hi, my name is Sorin, I'm a</h1> */}
            <h1 className="text-5xl text-white font-bold leading-[119%] md:h-[110px] h-[160px]">
              <span className="">Hi, I'm </span>
              <span className=" bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent">
                <ReactTyped
                  strings={[
                    "Sorin",
                    "Software Developer",
                    "Web Designer",
                    "UI/UX Designer",
                  ]}
                  typeSpeed={100}
                  backSpeed={40}
                  loop
                />
              </span>
              .
            </h1>
            <p className="text-grey font-normal mb-10">
              Crafting digital success for startups. I specialize in creating
              tailored online presences that elevate your brand. Let's bring
              your vision to life!
            </p>
          </div>
          <Button className="  bg-purple" width="w-[150px]">
            See My Work
          </Button>
        </div>
        <div className="md:w-[60%]">
          <img src="images/hero.png" alt="hero image" />
        </div>
      </div>
    </Container>
  );
}
