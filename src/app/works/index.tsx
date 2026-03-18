import { BlurFade } from "@/components/animation/blur-fade";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type Work = {
    title: string;
    description: string;
    href: string;
}
const WORKS: Array<Work> = [
    {
        title: "UniSchool Website",
        description: "The official website for UniSchool, a DX promotion team affiliated with Sanda Gakuen Junior High School, providing information about the team and its activities.",
        href: "/works/unischool"
    },
    {
        title: "ReCoron | Cron as a Service for API Users",
        description: "ReCoron is a cron as a service platform designed for API users, allowing them to schedule and manage their API tasks efficiently without the need for their own server infrastructure.",
        href: "/works/recoron" 
    },
    {
        title: "Renv | Easy Environment Management for Developers",
        description: "Renv is a tool that simplifies environment management for developers, providing an easy-to-use interface for creating, managing, and switching between different development environments.",
        href: "/works/renv"
    },
    {
        title: "Syosetsu Downloader",
        description: "A tool for downloading novels from the Syosetsu website, allowing users to save their favorite stories for offline reading.",
        href: "/_works/syosetsu"
    }
]

const Works = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-24">
            <BlurFade delay={0.1} inView>
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">Works</h1>
                    <p className="text-lg text-muted-foreground max-w-[600px]">
                        これまでに開発してきたプロダクトや関わってきたプロジェクトの一部をご紹介します。
                    </p>
                </div>
            </BlurFade>

            <div className="flex flex-col gap-6">
                {WORKS.map((work, idx) => (
                    <BlurFade key={work.title} delay={0.2 + idx * 0.1} inView>
                        <Link 
                            to={work.href} 
                            className="group block border border-border rounded-2xl p-6 md:p-8 transition-all hover:bg-muted/50"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="space-y-3">
                                    <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                                        {work.title}
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {work.description}
                                    </p>
                                </div>
                                <div className="shrink-0 p-2 md:p-3 rounded-full border border-border bg-background group-hover:border-primary/50 group-hover:bg-primary/5 transition-colors hidden sm:block">
                                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                            </div>
                        </Link>
                    </BlurFade>
                ))}
            </div>
        </div>
    );
}

export default Works;