import Button from "../components/Button";
import Container from "../components/Container";
import Project from "../components/Project";
import { projects } from "../data/projects";

export default function Portfolio() {
  // console.log(projects);
  return (
    <div className="bg-lighterDarkBlue">
      <Container className=" text-white flex flex-col items-center gap-10">
        <h1 className="text-3xl text-center py-5">Portfolio</h1>
        {projects.map((item, i) => (
          <Project item={item} reverse={i % 2 == 0} key={item.id} />
        ))}

        <Button className="bg-purple mx-auto" width="w-[150px]">
          View All
        </Button>
      </Container>
    </div>
  );
}
