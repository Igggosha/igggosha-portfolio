import { ProjectSection } from "../../components/project-section";
import { largeGameProjects } from "../../data/projects";

/** Renders the large-game project portfolio section. */
export default function LargeGameProjectsPage() {
  return (
    <ProjectSection
      eyebrow="Selected production / 02"
      title="Large game projects"
      description="Long-form game development with interconnected systems built to work together."
      projects={largeGameProjects}
    />
  );
}
