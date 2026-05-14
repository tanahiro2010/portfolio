import { useMemo } from "react";
import Table from "@/components/ui/table";
import { BlurFade } from "@/components/animation/blur-fade";

type HistoryItem = {
    date: string;
    title: string;
    description: string;
}
const HISTORY: Array<HistoryItem> = [
    {
        date: '2010-08-18',
        title: 'Born',
        description: 'Born in Kyoto, Japan'
    },
    {
        date: '2023-05-01',
        title: 'Joined Zisty',
        description: 'Began activities as a member of the engineering community Zisty'
    },
    {
        date: '2024-03-22',
        title: 'Participated in Security Camp Mini in Osaka',
        description: 'Attended Security Camp Mini as a first-year junior high school student and studied cybersecurity'
    },
    {
        date: '2024-10-02',
        title: 'Joined UniProject',
        description: 'Joined the digital creative circle UniProject and began participating in its activities'
    },
    {
        date: '2025-04-07',
        title: 'Founded UniSchool',
        description: 'Became a founding member of UniSchool, the DX promotion team affiliated with Sanda Gakuen'
    },
    {
        date: '2025-06-27',
        title: 'Passed the Midterm Selection in the NeoPage Writing Contest',
        description: 'My work passed the midterm selection in the 1st NeoPage New Year Writing Contest (Modern Fantasy category) and advanced to the final round'
    },
    {
        date: '2025-10-01',
        title: 'Joined the Shonan Fujisawa Kosen Discord Campus',
        description: 'Joined the Shonan Fujisawa Kosen Discord Campus and started engaging with the community'
    },
    {
        date: '2025-11-01',
        title: 'Appointed Vice President of the Student Council',
        description: 'Appointed Vice President of the Student Council in the Shonan Fujisawa Kosen community and contributed to its management'
    },
    {
        date: '2026-01-29',
        title: 'Passed the Midterm Selection in the GA Web Novel Contest',
        description: 'My work passed the midterm selection in the 1st GA Web Novel Contest on Kakuyomu and advanced to the final round'
    },
    {
        date: '2026-03-02',
        title: 'Founded the Kotob Project',
        description: 'Co-founded the Kotob Project, a community focused on developing projects centered around an LLM-based translation system'
    },
    {
        date: '2026-03-14',
        title: 'Participated in Security Camp Mini in Osaka',
        description: 'Attended Security Camp Mini again as a third-year junior high school student, learning advanced topics such as build system optimization and CTF challenges'
    }
];

type Team = Array<string>; // [Name, Description]
const TEAMS: Array<Team> = [
    ["Zisty",      "Community for Engineers"],
    ["UniProject", "Club for Digital creation"],
    ["UniSchool",  "DX promotion team directly under Sanda Gakuen"],
    ["Kotob",      "Community for developing projects with LLM translation system as core"],
    ["SF-Kosen",   "Shonan Fujisawa Kosen of Technology, where I am a student"],
];

type Skill = {
    name: string;
    desc: string;
}
const SKILLS: Array<Skill> = [
    { name: "Scenario Writing",     desc: "Crafting narratives, developing characters, and writing dialogue" },
    { name: "Software Development", desc: "Building projects using technologies such as Python, Ruby, JavaScript, TypeScript, and React, Nextjs" },
    { name: "Communication",        desc: "Strong collaboration and client communication skills" }
];

const About = () => {
    const history = useMemo<Array<HistoryItem>>(() => [...HISTORY]
        .filter((a) => new Date(a.date).getTime() <= Date.now())
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    []);
    
    return (
        <main className="mx-auto max-w-5xl bg-white px-4 py-10 text-black md:py-16">
            <BlurFade delay={0.1} inView>
                <div className="mb-10 rounded-[2rem] border border-black/15 bg-white p-6 md:p-8">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-black/50">profile</p>
                    <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black md:text-5xl">About</h1>
                    <p className="mt-4 max-w-[620px] text-base leading-8 text-black/75 md:text-lg">
                        私自身のことや、これまでの活動歴についてご紹介します。
                    </p>
                </div>
            </BlurFade>

            <div className="mt-6 flex flex-col gap-8 md:flex-row md:gap-10">
                <div className="w-full space-y-8 md:w-1/2 md:max-h-[800px] md:overflow-y-auto md:pr-4 custom-scrollbar"> { /* Self-introduction, Teams, Skills - side1 section */}
                    {/* Self-introduction */}
                    <BlurFade delay={0.2} inView>
                        <div className="rounded-[1.5rem] border border-black/15 p-5 md:p-6">
                            <h2 className="mb-5 text-xl font-semibold tracking-tight text-black">Self-introduction</h2>
                            <div className="space-y-4 text-black/80 leading-8">
                                <p>
                                    Hello, I'm tanahiro2010. I'm a scenario writer and software developer.
                                </p>
                                <p>
                                    I love expressing admiration through writing and using technology to work on creative projects.
                                </p>
                                <p>
                                    I hope to leverage my experiences to continue working on creative endeavors.
                                </p>
                            </div>
                        </div>
                    </BlurFade>

                    {/* Teams */}
                    <BlurFade delay={0.3} inView>
                        <div className="rounded-[1.5rem] border border-black/15 p-5 md:p-6">
                            <h2 className="mb-5 text-xl font-semibold tracking-tight text-black">Teams</h2>
                            <div className="overflow-hidden rounded-[1rem] border border-black/15 bg-white">
                                <Table headers={["Name", "Description"]} items={TEAMS} />
                            </div>
                        </div>
                    </BlurFade>

                    {/* Skills */}
                    <BlurFade delay={0.4} inView>
                        <div className="rounded-[1.5rem] border border-black/15 p-5 md:p-6">
                            <h2 className="mb-5 text-xl font-semibold tracking-tight text-black">Skills</h2>
                            <ul className="space-y-4">
                                {SKILLS.map((skill, idx) => (
                                    <li key={idx} className="group flex flex-col gap-1.5 rounded-[1.25rem] border border-black/15 p-5 transition-colors hover:bg-black hover:text-white">
                                        <h3 className="font-semibold tracking-tight text-black group-hover:text-white transition-colors">{skill.name}</h3>
                                        <p className="text-sm leading-relaxed text-black/75 group-hover:text-white">{skill.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </BlurFade>
                </div>

                {/* Experiences */}
                <div className="w-full md:w-1/2">            { /* Experiences - side2 section */}
                    <BlurFade delay={0.2} inView>
                        <div className="mb-6 rounded-[1.5rem] border border-black/15 p-5 md:p-6">
                            <h2 className="text-xl font-semibold tracking-tight text-black">Experiences</h2>
                        </div>
                    </BlurFade>
                    <div className="md:max-h-[800px] md:overflow-y-auto md:pr-4 pb-12 custom-scrollbar">
                        <ul className="relative ml-3 space-y-6 border-l border-black/20 pl-6">
                            {history.map((item, index) => (
                                <BlurFade key={index} delay={0.3 + index * 0.05} inView>
                                    <li className="relative pl-2">
                                        <span className="absolute -left-[10px] top-2 flex h-4 w-4 items-center justify-center rounded-full border border-black/30 bg-white"></span>

                                        <div className="group rounded-[1.25rem] border border-black/15 p-5 transition-colors hover:bg-black hover:text-white">
                                            <time className="mb-2 inline-block border-b border-black/20 text-sm text-black/65 group-hover:border-white/70 group-hover:text-white" dateTime={item.date}>{item.date}</time>
                                            <h3 className="text-lg font-semibold tracking-tight text-black group-hover:text-white transition-colors">{item.title}</h3>
                                            <p className="mt-2 text-sm leading-relaxed text-black/75 group-hover:text-white">{item.description}</p>
                                        </div>
                                    </li>
                                </BlurFade>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default About;