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
        description: "The official website for UniSchool, a DX promotion team affiliated with Sanda Gakuen Junior High School, providing information about the team and its activities. Designed by Ri0n",
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
        <div className="w-full bg-white px-0 py-0 text-black md:py-8">
            <BlurFade delay={0.1} inView>
                <div className="mb-8 rounded border border-black/15 bg-white p-4 md:p-6">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-black/50">projects</p>
                    <h1 className="mt-2 text-3xl font-semibold tracking-tight text-black md:text-4xl">Works</h1>
                    <p className="mt-3 max-w-[620px] text-base leading-7 text-black/75 md:text-lg">
                        これまでに開発してきたプロダクトや関わってきたプロジェクトの一部をご紹介します。
                    </p>
                </div>
            </BlurFade>

            <div className="flex flex-col gap-5">
                {WORKS.map((work, idx) => (
                    <BlurFade key={work.title} delay={0.2 + idx * 0.1} inView>
                        <Link 
                            to={work.href} 
                            className="group block rounded border border-black/15 p-6 md:p-8 transition-colors hover:bg-black hover:text-white"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="space-y-3">
                                    <h2 className="text-xl font-semibold tracking-tight text-black group-hover:text-white transition-colors md:text-2xl">
                                        {work.title}
                                    </h2>
                                    <p className="text-black/75 leading-relaxed group-hover:text-white transition-colors">
                                        {work.description}
                                    </p>
                                </div>
                                <div className="hidden shrink-0 rounded-full border border-black/15 bg-white p-2 transition-colors group-hover:border-white/40 group-hover:bg-black sm:block">
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