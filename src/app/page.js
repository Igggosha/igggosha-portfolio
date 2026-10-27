import Link from "next/link";
import { PortfolioShell } from "../components/portfolio-shell";
import { TechIcon } from "../components/tech-icon";

const technologies = [
  "RBLX.LUA",
  "C#",
  "Unity",
  "ASP.NET",
  "Nest.js",
  "Next.js",
  "React.js",
];

/** Renders the portfolio landing page with Igggosha's introduction and tools. */
export default function Home() {
  return (
    <PortfolioShell>
      <main className="home-page page-wrap">
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow"><span className="status-dot" /> Available for select projects</p>
          <h1 id="hero-title">
            Bringing your game
            <br />
            to <span>life</span>.
          </h1>
          <div className="hero-bottom">
            <p className="hero-copy">
              Hello! I am Igggosha, a Roblox scripter with 2 years of experience.
              I build gameplay systems for projects with different audiences and
              purposes—from physics simulation and 3D geometry with CFrame to
              terrain generation, vehicles, weapons, and inventory systems.
            </p>
            <Link className="text-link" href="/passion-projects">
              Explore my work <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="hero-index" aria-hidden="true">01 / 04</div>
        </section>

        <section className="stack-section section-rule" aria-labelledby="stack-title">
          <div className="section-heading">
            <p className="eyebrow">The toolkit</p>
            <h2 id="stack-title">Tech stack</h2>
          </div>
          <ul className="tech-grid">
            {technologies.map((technology) => (
              <li className="tech-item" key={technology}>
                <TechIcon name={technology} />
                <span>{technology}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="home-work section-rule" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title">Built to be played.</h2>
          </div>
          <div className="work-links">
            <Link href="/passion-projects"><span>01</span> Passion projects <span aria-hidden="true">↗</span></Link>
            <Link href="/large-game-projects"><span>02</span> Large game projects <span aria-hidden="true">↗</span></Link>
            <Link href="/trend-games"><span>03</span> Trend game projects <span aria-hidden="true">↗</span></Link>
            <Link href="/standalone-systems"><span>04</span> Standalone systems <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
    </PortfolioShell>
  );
}
