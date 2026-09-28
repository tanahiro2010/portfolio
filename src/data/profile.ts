export type HistoryItem = {
  date: string;
  title: string;
  description: string;
};

export const HISTORY: HistoryItem[] = [
  {
    date: "2010-08-18",
    title: "Born",
    description: "Born in Kyoto, Japan",
  },
  {
    date: "2023-05-01",
    title: "Joined Zisty",
    description:
      "Began activities as a member of the engineering community Zisty",
  },
  {
    date: "2024-03-22",
    title: "Security Camp Mini in Osaka",
    description:
      "Attended Security Camp Mini as a first-year junior high school student and studied cybersecurity",
  },
  {
    date: "2024-10-02",
    title: "Joined UniProject",
    description:
      "Joined the digital creative circle UniProject and began participating in its activities",
  },
  {
    date: "2025-04-07",
    title: "Founded UniSchool",
    description:
      "Became a founding member of UniSchool, the DX promotion team affiliated with Sanda Gakuen",
  },
  {
    date: "2025-06-27",
    title: "NeoPage Writing Contest — Midterm",
    description:
      "My work passed the midterm selection in the 1st NeoPage New Year Writing Contest (Modern Fantasy) and advanced to the final round",
  },
  {
    date: "2025-10-01",
    title: "Shonan Fujisawa Kosen Discord Campus",
    description:
      "Joined the Shonan Fujisawa Kosen Discord Campus and started engaging with the community",
  },
  {
    date: "2025-11-01",
    title: "Vice President of the Student Council",
    description:
      "Appointed Vice President of the Student Council in the Shonan Fujisawa Kosen community and contributed to its management",
  },
  {
    date: "2026-01-29",
    title: "GA Web Novel Contest — Midterm",
    description:
      "My work passed the midterm selection in the 1st GA Web Novel Contest on Kakuyomu and advanced to the final round",
  },
  {
    date: "2026-03-02",
    title: "Founded the Kotob Project",
    description:
      "Co-founded the Kotob Project, a community developing projects centered around an LLM-based translation system",
  },
  {
    date: "2026-03-14",
    title: "Security Camp Mini in Osaka",
    description:
      "Attended Security Camp Mini again as a third-year junior high school student, learning build system optimization and CTF challenges",
  },
];

export type Team = { name: string; description: string };

export const TEAMS: Team[] = [
  { name: "Zisty", description: "Community for engineers" },
  { name: "UniProject", description: "Club for digital creation" },
  {
    name: "UniSchool",
    description: "DX promotion team directly under Sanda Gakuen",
  },
  {
    name: "Kotob",
    description: "Community building an LLM translation system",
  },
  {
    name: "SF-Kosen",
    description: "Shonan Fujisawa Kosen of Technology, where I study",
  },
];

export type Skill = { name: string; desc: string };

export const SKILLS: Skill[] = [
  {
    name: "Scenario Writing",
    desc: "Crafting narratives, developing characters, and writing dialogue",
  },
  {
    name: "Software Development",
    desc: "Building products with Python, Ruby, JavaScript, TypeScript, React and Next.js",
  },
  {
    name: "Communication",
    desc: "Strong collaboration and client communication skills",
  },
];

export type TechStack = { lang: string; framework: string[] };

export const TECH_STACKS: TechStack[] = [
  {
    lang: "JavaScript / TypeScript",
    framework: [
      "React",
      "Next.js",
      "React Native",
      "Vue",
      "Nuxt.js",
      "Hono",
      "Express.js",
      "Nest.js",
      "Discord.js",
    ],
  },
  { lang: "Ruby", framework: ["Sinatra", "Ruby on Rails"] },
  { lang: "Python", framework: ["Flask", "FastAPI", "Django", "Discord.py"] },
  { lang: "PHP", framework: ["Laravel"] },
  { lang: "Go", framework: ["Gin", "Echo", "DiscordGo"] },
  { lang: "Java", framework: ["Spring Boot"] },
  { lang: "C#", framework: [".NET Framework"] },
  { lang: "Flutter", framework: [] },
  { lang: "C / C++", framework: [] },
  { lang: "Rust", framework: [] },
];
