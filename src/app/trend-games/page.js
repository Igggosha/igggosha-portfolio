import { ProjectSection } from "../../components/project-section";
import { trendGameProjects } from "../../data/projects";

/** Renders the trend-game project portfolio section. */
export default function TrendGamesPage() {
  return (
    <ProjectSection
      eyebrow="Selected production / 03"
      title="Trend game projects"
      description="Focused gameplay loops, player progression, and the supporting systems behind them."
      projects={trendGameProjects}
    />
  );
}
