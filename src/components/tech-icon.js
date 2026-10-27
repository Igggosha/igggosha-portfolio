import Image from "next/image";
import luauIcon from "../img/Luau.webp";
import unityIcon from "../img/Unity.png";
import aspNetIcon from "../img/asp-net-core.webp";
import csharpIcon from "../img/csharp.webp";
import nestIcon from "../img/nest.svg";
import nextIcon from "../img/nextjs.png";
import reactIcon from "../img/react.svg.webp";

const icons = {
  "RBLX.LUA": { src: luauIcon, alt: "Luau" },
  "C#": { src: csharpIcon, alt: "C sharp" },
  Unity: { src: unityIcon, alt: "Unity" },
  "ASP.NET": { src: aspNetIcon, alt: "ASP.NET Core" },
  "Nest.js": { src: nestIcon, alt: "NestJS" },
  "Next.js": { src: nextIcon, alt: "Next.js" },
  "React.js": { src: reactIcon, alt: "React" },
};

/** Displays a technology's supplied logo in a high-contrast tile. */
export function TechIcon({ name }) {
  const icon = icons[name];

  return (
    <span className={`tech-icon tech-icon-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
      <Image src={icon.src} alt={icon.alt} width={36} height={36} />
    </span>
  );
}
