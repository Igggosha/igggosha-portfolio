import untitledLifeImage from "../img/UntitledLife/image.webp";
import untitledLifeScreenshotMay from "../img/UntitledLife/Screenshot 2026-05-18 at 17.39.53.png";
import untitledLifeScreenshotJune from "../img/UntitledLife/Screenshot 2026-06-07 at 14.35.21.png";
import untitledLifeScreenshotAugust from "../img/UntitledLife/Screenshot 2026-08-18 at 17.12.41.png";
import untitledLifeScreenshotDecember from "../img/UntitledLife/Screenshot_2025-12-21_at_14.45.54.webp";
import untitledLifeScreenshotJuly7 from "../img/UntitledLife/Screenshot_2026-07-07_at_16.27.44.webp";
import untitledLifeScreenshotJuly8 from "../img/UntitledLife/Screenshot_2026-07-08_at_17.35.33.webp";

export const passionProjects = [
  {
    title: "Angland: 10000 BCE",
    type: "Survival · World generation",
    url: "https://www.roblox.com/games/97759301282739/ANGLAND-10000-BCE",
    description:
      "A survival and story game set in 10000 BCE. Its pilot feature is procedurally generated terrain powered by Simplex noise and a five-level noise map. Biomes vary with altitude and are selected using regional temperature and a separate humidity map. The world also features animals with unique AI, boats, building, and a temperature and hypothermia system.",
    videoId: "_QX1DLjD8o0",
  },
  {
    title: "Plane Havoc",
    type: "Vehicle combat · Simulation",
    url: "https://www.roblox.com/games/75126606279723/Plane-Havoc",
    videoId: "A2jk8TGuMHA",
    carousel: [
      { type: "video", videoId: "Ay2F55YQYUg", title: "Plane Havoc gameplay" },
      { type: "video", videoId: "Dl6Kw4c6P4A", title: "Plane Havoc gameplay" },
      { type: "video", videoId: "oGsZgJa8uTo", title: "Plane Havoc gameplay" },
      { type: "video", videoId: "0UfEE904Sok", title: "Plane Havoc gameplay" },
      { type: "video", videoId: "r1fZSkdm6o0", title: "Plane Havoc gameplay" },
      { type: "video", videoId: "Lz7KD6cDDdE", title: "Plane Havoc gameplay" },
    ],
    description:
      "A semi-realistic plane-combat game with responsive flight controls, useful cabin tools, part damage, and an aerodynamic simulation built from extensive calculations and approximations. It also features BGS, a gun system made for another project, and a high-performance triangle-terrain generator that creates a 929 km² map in about 10 seconds.",
  },
];

export const largeGameProjects = [
  {
    title: "Untitled Life",
    type: "Open world · Roleplay",
    url: "https://www.roblox.com/games/16087306068/Untitled-Life",
    videoId: "LvlcWOv6hac",
    carousel: [
      { type: "video", videoId: "-bw7iO94UVM", title: "Untitled Life gameplay video 1" },
      { type: "video", videoId: "KV1ekYer_AY", title: "Untitled Life gameplay video 2" },
      { type: "image", src: untitledLifeImage, alt: "Untitled Life project image" },
      {
        type: "image",
        src: untitledLifeScreenshotDecember,
        alt: "Untitled Life screenshot from December 2025",
      },
      {
        type: "image",
        src: untitledLifeScreenshotMay,
        alt: "Untitled Life screenshot from May 2026",
      },
      {
        type: "image",
        src: untitledLifeScreenshotJune,
        alt: "Untitled Life screenshot from June 2026",
      },
      {
        type: "image",
        src: untitledLifeScreenshotJuly7,
        alt: "Untitled Life screenshot from July 7, 2026",
      },
      {
        type: "image",
        src: untitledLifeScreenshotJuly8,
        alt: "Untitled Life screenshot from July 8, 2026",
      },
      {
        type: "image",
        src: untitledLifeScreenshotAugust,
        alt: "Untitled Life screenshot from August 2026",
      },
    ],
    description:
      "A GTA-genre game where players roam freely, take a job, commit crimes, or work as a police officer. My contributions include the vehicle and gun systems, bus routes, the minimap, Dijkstra's algorithm for minimap pathfinding, and many smaller systems.",
  },
];

export const trendGameProjects = [
  {
    title: "Grow Your Fish",
    type: "Trend game · Progression",
    url: "https://www.roblox.com/games/93518886183149/Grow-Your-Fish",
    videoId: 'wlQpHHKz4EU',
    description:
      "My first trend-game project. I focused on datastore work and building the plot system, alongside UI integration and monetization systems.",
  },
  {
    title: "Hole Or Die",
    type: "Trend game · Party",
    url: "https://www.roblox.com/games/105950274760112/Hole-or-Die",
    description:
      "A simple, fast-paced trend game where players use emotes to fit through an opening in an advancing wall. This was one of my first projects using ProfileStore to persist player data.",
  },
  {
    title: "Hunt a Dino",
    type: "Trend game · Creature collection",
    url: "https://www.roblox.com/games/84763728916570/Hunt-a-Dino",
    videoId: 'jJB8ETW9m9g',
    description:
      "A catch-an-animal style game featuring a plot system, datastore, humanoid animations, and substantial work on humanoids and creature behavior.",
  },
  {
    title: "2 Player Chained Tower",
    type: "Trend game · Co-op obby",
    url: "https://www.roblox.com/games/134006508254260/2-Player-Chained-Tower",
    description:
      "A two-player obby built around a custom-scripted chain constraint. Getting the stiffness, network responsiveness, and synchronization right took plenty of iteration.",
  },
];

export const standaloneSystems = [
  {
    title: "Builderman’s Medical & Gun Systems",
    type: "Standalone systems · Combat & medical",
    url: "https://github.com/Igggosha/Builderman-Medical-System",
    linkLabel: "View on GitHub",
    description:
      "An interconnected medical, gore, and gun system built for an unreleased game. The gun uses SecureCast, a limited magazine, and recoil, with shots creating wounds that cause bleeding and pain. Players can treat injuries with tourniquets, gauze, stitches, medication, blood transfusions, CPR, and defibrillation, while severe wounds can dismember characters. The repository includes the SecureCast setup and system implementation.",
    videoId: "d5yq8lyMVuA",
  },
];
