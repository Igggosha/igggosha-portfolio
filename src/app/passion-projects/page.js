import { ProjectSection } from "../../components/project-section";
import { passionProjects } from "../../data/projects";

/** Renders the passion-project portfolio section. */
export default function PassionProjectsPage() {
  return (
    <ProjectSection
      eyebrow="Personal work / 01"
      title="Passion projects"
      description="Experiments in simulation, procedural worlds, and the systems that bring them to life."
      projects={passionProjects}
    />
  );
}
