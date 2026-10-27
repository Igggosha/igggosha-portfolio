import Link from "next/link";
import Image from "next/image";
import profileImage from "../img/profile.webp";

const navigationGroups = [
  {
    label: "RBLX.LUA",
    links: [
      { href: "/passion-projects", label: "Passion projects" },
      { href: "/large-game-projects", label: "Large game projects" },
      { href: "/trend-games", label: "Trend games" },
      { href: "/standalone-systems", label: "Standalone systems" },
    ],
  },
  {
    label: "Unity",
    links: [{ href: "/simulations", label: "Simulations" }],
  },
  {
    label: "Web / Mobile",
    links: [{ href: "/apps", label: "Apps" }],
  },
];

/** Provides the shared site header, navigation, and footer for every portfolio page. */
export function PortfolioShell({ children }) {
  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Igggosha portfolio home">
          <Image className="brand-avatar" src={profileImage} alt="" />
          <span>IGGGOSHA<span className="brand-dot">.</span></span>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          {navigationGroups.map((group) => (
            <div className="nav-group" key={group.label}>
              <span className="nav-group-label">{group.label}</span>
              <div className="nav-group-links">
                {group.links.map((link) => (
                  <Link key={link.href} href={link.href}>{link.label}</Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <Link className="header-contact" href="/">About <span aria-hidden="true">↗</span></Link>
      </header>
      {children}
      <footer className="site-footer">
        <Link className="brand footer-brand" href="/">
          <Image className="brand-avatar" src={profileImage} alt="" />
          <span>IGGGOSHA<span className="brand-dot">.</span></span>
        </Link>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <p>Contact me today!</p>
          <p>Discord: @igggosha</p>
        </div>
        
        <span>© Igggosha</span>
      </footer>
    </>
  );
}
