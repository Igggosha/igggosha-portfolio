import { PortfolioShell } from "../../components/portfolio-shell";
import { ProjectCard } from "../../components/project-card";

const hitTracker = {
  title: "HitTracker",
  type: "Web / Mobile · Fitness",
  url: "https://github.com/smmlt/HitTracker",
  linkLabel: "View project on GitHub",
  architecture: true,
  description:
    "HitTracker is a cross-platform workout planner and tracker for creating training programs, scheduling workouts, and recording results. I contributed as a full-stack developer, primarily on the backend: working with Drizzle ORM, designing and implementing the database schema, creating API endpoints, and setting up Docker Compose.",
};

/** Renders the Web/Mobile apps portfolio section and project cards. */
export default function AppsPage() {
  return (
    <PortfolioShell>
      <main className="page-wrap listing-page">
        <div className="listing-heading">
          <p className="eyebrow">Web / Mobile</p>
          <h1>Apps<span className="brand-dot">.</span></h1>
          <p className="listing-description">
            Applications built for useful, everyday experiences across devices.
          </p>
        </div>
        <div className="project-list">
          <ProjectCard project={hitTracker} index={0} />
        </div>
      </main>
    </PortfolioShell>
  );
}
