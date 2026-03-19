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
        date: '2013-04-01',
        title: 'Moved to Hyogo',
        description: 'Relocated to Hyogo Prefecture with my family'
    },
    {
        date: '2016-04-04',
        title: 'Entered Elementary School',
        description: 'Started elementary school in Hyogo Prefecture'
    },
    {
        date: '2023-04-01',
        title: 'Entered Junior High School',
        description: 'Enrolled at Sanda Gakuen Junior High School'
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
        title: 'Joined UniSchool',
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
    },
    {
        date: '2026-04-19',
        title: 'Graduated from Junior High School',
        description: 'Graduated from Sanda Gakuen Junior High School and moved on to the next stage. The adventure has only just begun.'
    }
];

const About = () => {
    const history = useMemo<Array<HistoryItem>>(() => [...HISTORY].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    ), []);
    return (
        <main className="max-w-5xl mx-auto px-4 py-12 md:py-24">
            <BlurFade delay={0.1} inView>
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">About</h1>
                    <p className="text-lg text-muted-foreground max-w-[600px]">
                        私自身のことや、これまでの活動歴についてご紹介します。
                    </p>
                </div>
            </BlurFade>

            <div className="flex md:flex-row flex-col mt-6 gap-12 md:gap-16">
                <div className="w-full md:w-1/2 space-y-12 md:max-h-[800px] md:overflow-y-auto md:pr-4 custom-scrollbar"> { /* Self-introduction, Teams, Skills - side1 section */ }
                    {/* Self-introduction */}
                    <BlurFade delay={0.2} inView>
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight mb-6 text-foreground">Self-introduction</h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
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
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight mb-6 text-foreground">Teams</h2>
                            <div className=" overflow-hidden bg-background">
                                <Table headers={["Name", "Description"]} items={[
                                    ["Zisty", "Community for Engineers"],
                                    ["UniProject", "Club for Digital creation"],
                                    ["UniSchool", "DX promotion team directly under Sanda Gakuen"],
                                    ["Kotob", "Community for developing projects with LLM translation system as core"],
                                    ["SF-Kosen", "Shonan Fujisawa Kosen of Technology, where I am a student"],
                                ]} />
                            </div>
                        </div>
                    </BlurFade>

                    {/* Skills */}
                    <BlurFade delay={0.4} inView>
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight mb-6 text-foreground">Skills</h2>
                            <ul className="space-y-4">
                                {[
                                    { name: "Scenario Writing", desc: "Crafting narratives, developing characters, and writing dialogue" },
                                    { name: "Software Development", desc: "Building projects using technologies such as Python, Ruby, JavaScript, TypeScript, and React, Nextjs" },
                                    { name: "Communication", desc: "Strong collaboration and client communication skills" }
                                ].map((skill, idx) => (
                                    <li key={idx} className="group flex flex-col gap-1.5 border border-border rounded-2xl p-5 md:p-6 transition-all hover:bg-muted/50">
                                        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{skill.name}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </BlurFade>
                </div>

                {/* Experiences */}
                <div className="w-full md:w-1/2">            { /* Experiences - side2 section */ }
                    <BlurFade delay={0.2} inView>
                        <h2 className="text-2xl font-bold tracking-tight mb-8 text-foreground">Experiences</h2>
                    </BlurFade>
                    <div className="md:max-h-[800px] md:overflow-y-auto md:pr-4 pb-12 custom-scrollbar">
                        <ul className="relative border-l-2 border-border ml-4 space-y-8">
                            {history.map((item, index) => (
                                <BlurFade key={index} delay={0.3 + index * 0.05} inView>
                                    <li className="relative pl-8">
                                        <span className="absolute -left-[9px] top-2 flex items-center justify-center w-4 h-4 bg-background border-2 border-primary rounded-full"></span>

                                        <div className="group border border-border rounded-2xl p-5 transition-all hover:bg-muted/50 hover:border-primary/50">
                                            <time className="text-sm font-medium text-muted-foreground mb-1 block" dateTime={item.date}>{item.date}</time>
                                            <h3 className="text-lg font-bold text-foreground mt-1 group-hover:text-primary transition-colors">{item.title}</h3>
                                            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{item.description}</p>
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