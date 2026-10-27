import { PortfolioShell } from "./portfolio-shell";
import { ProjectCard } from "./project-card";

/** Builds a titled project listing page from a section label and project data. */
export function ProjectSection({ eyebrow, title, description, projects }) {
  return (
    <PortfolioShell>
      <main className="page-wrap listing-page">
        <div className="listing-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}<span className="brand-dot">.</span></h1>
          {description ? <p className="listing-description">{description}</p> : null}
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </main>
    </PortfolioShell>
  );
}
