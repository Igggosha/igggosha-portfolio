/** Illustrates HitTracker's client, API, data, storage, email, and OAuth services. */
export function HitTrackerArchitecture() {
  return (
    <div className="architecture-frame">
      <svg
        className="architecture-diagram"
        viewBox="0 0 800 400"
        role="img"
        aria-labelledby="hit-tracker-architecture-title hit-tracker-architecture-description"
      >
        <title id="hit-tracker-architecture-title">HitTracker architecture</title>
        <desc id="hit-tracker-architecture-description">
          Expo and React Native clients connect to a NestJS REST API. The API
          uses PostgreSQL with Drizzle ORM, MinIO or S3 storage, and SMTP email.
          Clients authenticate with Google OAuth through the API.
        </desc>
        <defs>
          <marker id="architecture-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0 0 8 4 0 8z" fill="currentColor" />
          </marker>
        </defs>
        <g className="architecture-connections" fill="none" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#architecture-arrow)">
          <path d="M220 105h67" />
          <path d="M493 105h67" />
          <path d="M399 154v59h-93v26" />
          <path d="M420 154v59h151v26" />
          <path d="M120 154v85" />
          <path d="M195 279h30v-137h62" />
        </g>
        <g className="architecture-node">
          <rect x="24" y="58" width="196" height="96" rx="3" />
          <text className="architecture-node-title" x="44" y="91">CLIENT</text>
          <text x="44" y="116">Expo · React Native</text>
          <text className="architecture-node-detail" x="44" y="137">Web · Android · iOS-ready</text>
        </g>
        <g className="architecture-node architecture-node-primary">
          <rect x="297" y="58" width="196" height="96" rx="3" />
          <text className="architecture-node-title" x="317" y="91">API</text>
          <text x="317" y="116">NestJS REST</text>
          <text className="architecture-node-detail" x="317" y="137">JWT · OAuth · validation</text>
        </g>
        <g className="architecture-node">
          <rect x="570" y="58" width="206" height="96" rx="3" />
          <text className="architecture-node-title" x="590" y="91">DATABASE</text>
          <text x="590" y="116">PostgreSQL</text>
          <text className="architecture-node-detail" x="590" y="137">Drizzle ORM</text>
        </g>
        <g className="architecture-node architecture-node-secondary">
          <rect x="242" y="239" width="130" height="80" rx="3" />
          <text className="architecture-node-title" x="258" y="270">STORAGE</text>
          <text className="architecture-node-detail" x="258" y="294">MinIO / S3</text>
        </g>
        <g className="architecture-node architecture-node-secondary">
          <rect x="506" y="239" width="130" height="80" rx="3" />
          <text className="architecture-node-title" x="522" y="270">EMAIL</text>
          <text className="architecture-node-detail" x="522" y="294">SMTP</text>
        </g>
        <g className="architecture-node architecture-node-secondary">
          <rect x="55" y="239" width="140" height="80" rx="3" />
          <text className="architecture-node-title" x="71" y="270">SIGN-IN</text>
          <text className="architecture-node-detail" x="71" y="294">Google OAuth 2.0</text>
        </g>
        <text className="architecture-caption" x="24" y="369">HITTRACKER / SYSTEM ARCHITECTURE</text>
      </svg>
    </div>
  );
}
