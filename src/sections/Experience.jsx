import Container from "../components/Container";
import ExperienceItem from "../components/ExperienceItem";
import { experience } from "../data/projects";
export default function Experience() {
  return (
    <div className="bg-lighterDarkBlue py-16">
      <Container className="text-center" id="experience">
        <div>
          <h1 className="text-3xl text-white mb-14">Experience</h1>
        </div>
        <div className="flex flex-wrap gap-y-10">
          {experience.map((item) => (
            <ExperienceItem item={item} key={item.name} />
          ))}
        </div>
      </Container>
    </div>
  );
}
