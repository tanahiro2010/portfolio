import { useEffect, useMemo, useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { BlurFade } from "@/components/animation/blur-fade";
import Works from "./works/index";
import Links from "./links";
import About from "./about";

const IndexPage = () => {
    const [splash, setSplash] = useState(true);

    useEffect(() => {
        const t = setTimeout(() => setSplash(false), 1400);
        return () => clearTimeout(t);
    }, []);

    const profileTags = useMemo(() => [
        "Scenario writer",
        "Software developer",
        "Minimal / black & white",
    ], []);

    return (
        <div className="min-h-screen bg-white text-black">
            <Header />

            {/* Splash */}
            <div aria-hidden={!splash} className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-700 ${splash ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <h1 className="text-7xl font-black tracking-tight sm:text-9xl">tanahiro2010</h1>
            </div>

            <main className="mx-auto max-w-6xl px-4 py-12 md:py-20">
                {/* Hero */}
                <section id="hero" className="mb-12">
                    <BlurFade delay={0.1} inView>
                        <div className="rounded-[1.5rem] border border-black/15 bg-white p-8">
                            <div className="mb-4 text-[11px] uppercase tracking-[0.35em] text-black/50">hello</div>
                            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Hirohisa Tanaka</h2>
                            <p className="mt-2 text-sm uppercase tracking-[0.28em] text-black/55">@tanahiro2010</p>

                            <div className="mt-6 space-y-4 text-black/80 leading-7">
                                <p>
                                    I am a scenario writer for visual novels and a software developer. I enjoy building small tools, crafting stories, and exploring ideas at the intersection of narrative and code.
                                </p>
                                <p>
                                    Skills: scenario writing, TypeScript, React, simple web tools, product thinking.
                                </p>
                                <p>
                                    If you have a project idea, collaboration request, or just want to say hi, please get in touch.
                                </p>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {profileTags.map((t) => (
                                    <span key={t} className="rounded-full border border-black/15 px-3 py-1 text-xs uppercase tracking-[0.22em] text-black/70">{t}</span>
                                ))}
                            </div>
                        </div>
                    </BlurFade>
                </section>

                {/* About */}
                <section id="about" className="mb-12">
                    <About />
                </section>

                {/* Works */}
                <section id="works" className="mb-12">
                    <Works />
                </section>

                {/* Links */}
                <section id="links" className="mb-12">
                    <Links />
                </section>

                {/* Contact */}
                <section id="contact" className="mb-20">
                    <div className="rounded-[1.5rem] border border-black/15 bg-white p-8">
                        <h3 className="text-2xl font-semibold">Contact</h3>
                        <p className="mt-3 text-black/80">ご依頼・お問い合わせは以下のメールアドレス、またはSNSからお願いします。</p>
                        <p className="mt-4 font-medium">email: <a href="mailto:tanahiro2010.offical@gmail.com" className="underline">tanahiro2010.offical@gmail.com</a></p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default IndexPage;
