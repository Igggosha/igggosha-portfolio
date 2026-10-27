import { YouTubeEmbed } from "./youtube-embed";
import { HitTrackerArchitecture } from "./hit-tracker-architecture";
import { MediaCarousel } from "./media-carousel";

/** Presents a project description, external project link, and optional media showcase. */
export function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <div className="project-meta">
        <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
        <span className="project-type">{project.type}</span>
      </div>
      <div className="project-content">
        <div className="project-copy">
          <h2>{project.title}</h2>
          {project.description ? <p>{project.description}</p> : null}
          {project.url ? (
            <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
              {project.linkLabel ?? "View on Roblox"} <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>
        {project.architecture ? (
          <HitTrackerArchitecture />
        ) : project.videoId ? (
          <YouTubeEmbed videoId={project.videoId} title={`${project.title} gameplay video`} />
        ) : (
          <div className="project-placeholder" aria-label={`${project.title} video coming soon`}>
            <span className="placeholder-icon" aria-hidden="true">▶</span>
            <span>Gameplay footage</span>
            <span className="placeholder-note">Video showcase coming soon</span>
          </div>
        )}
      </div>
      {project.carousel?.length ? (
        <MediaCarousel items={project.carousel} title={`${project.title} media`} />
      ) : null}
    </article>
  );
}
