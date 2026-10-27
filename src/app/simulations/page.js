import { ProjectSection } from "../../components/project-section";

const simulations = [
  {
    title: "Genetics Simulator",
    type: "Unity · Simulation",
    description: "A cell simulator, whereby each cell carries a unique genetic code, which codes for when a cell should differentiate, hypertrophy, divide, send signals and how it should respond to different signals. The video showcases a 'plant' and an 'amoeba' competing.",
    videoId: "PT74_9D76vo",
  },
];

/** Renders the Unity simulations portfolio section. */
export default function SimulationsPage() {
  return (
    <ProjectSection
      eyebrow="Unity / Simulations"
      title="Simulations"
      projects={simulations}
    />
  );
}
