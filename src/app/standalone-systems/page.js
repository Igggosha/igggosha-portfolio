import { ProjectSection } from "../../components/project-section";
import { standaloneSystems } from "../../data/projects";

/** Renders the standalone gameplay-systems portfolio section. */
export default function StandaloneSystemsPage() {
  return (
    <ProjectSection
      eyebrow="Systems / 04"
      title="Standalone systems"
      description="Individual systems built to add depth and detail to gameplay."
      projects={standaloneSystems}
    />
  );
}
