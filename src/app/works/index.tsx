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
        href: "/works/syosetsu"
    }
]

const Works = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-24 bg-white text-black">
            <BlurFade delay={0.1} inView>
                <div className="mb-12 border-b-4 border-black pb-4">
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-widest mb-4 text-black">Works</h1>
                    <p className="text-lg text-black font-bold max-w-[600px]">
                        これまでに開発してきたプロダクトや関わってきたプロジェクトの一部をご紹介します。
                    </p>
                </div>
            </BlurFade>

            <div className="flex flex-col gap-6">
                {WORKS.map((work, idx) => (
                    <BlurFade key={work.title} delay={0.2 + idx * 0.1} inView>
                        <Link 
                            to={work.href} 
                            className="group block border-4 border-black rounded-none p-6 md:p-8 transition-colors hover:bg-black hover:text-white"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="space-y-3">
                                    <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest text-black group-hover:text-white transition-colors">
                                        {work.title}
                                    </h2>
                                    <p className="text-black font-bold leading-relaxed group-hover:text-white transition-colors">
                                        {work.description}
                                    </p>
                                </div>
                                <div className="shrink-0 p-2 md:p-3 rounded-none border-4 border-black bg-white group-hover:border-white group-hover:bg-black transition-colors hidden sm:block">
                                    <ArrowRight className="w-6 h-6 text-black group-hover:text-white transition-colors" strokeWidth={3} />
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