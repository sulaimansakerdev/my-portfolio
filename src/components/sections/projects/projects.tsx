import AnimatedDiv from "@/components/animation/animated-div";
import ProjectsGrid from "./projects-grid";
import SectionHeader from "@/components/ui/section-header";
import { categories, projects } from "@/config/projects";

export default function Projects() {
  return (
    <AnimatedDiv
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <section id="projects">
        <SectionHeader title="Projects" subtitle="Some of my Work" />

        <ProjectsGrid categories={categories} projects={projects} />
      </section>
    </AnimatedDiv>
  );
}
