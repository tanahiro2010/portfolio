export type Work = {
  title: string;
  description: string;
  href: string;
  year?: string;
  tags?: string[];
};

export const WORKS: Work[] = [
  {
    title: "UniSchool Website",
    description:
      "The official website for UniSchool, a DX promotion team affiliated with Sanda Gakuen Junior High School. Design by Ri0n.",
    href: "https://unischool-official.vercel.app/",
    year: "2025",
    tags: ["Next.js", "Web"],
  },
  {
    title: "ReCoron",
    description:
      "Cron as a Service for API users — schedule and manage API tasks without running your own server infrastructure.",
    href: "https://re-coron.vercel.app/",
    year: "2025",
    tags: ["SaaS", "API"],
  },
  {
    title: "Renv",
    description:
      "Easy environment management for developers. Create, manage and switch between development environments from one interface.",
    href: "https://renv-web.vercel.app/",
    year: "2025",
    tags: ["DevTool"],
  },
  {
    title: "AnyQuiz",
    description:
      "A web platform where anyone can create, share and solve custom quizzes and flashcards.",
    href: "https://nandemo.tanahiro2010.com",
    year: "2025",
    tags: ["Web", "Education"],
  },
];
