import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { BlurFade } from "@/components/animation/blur-fade";
import { Link } from "@/components/ui/link";
import { numToMs } from "@/lib/utils/time";

type NavItem = {
    href: string;
    label: string;
}
const navItems: NavItem[] = [
    { label: "About", href: "/about" },
    { label: "Works", href: "/works" },
    { label: "Blogs", href: "/blogs" },
    { label: "Links", href: "/links" },
    { label: "Contact", href: "/contact" },
];
const TIME_TO_DEVELOP: number = numToMs(5); // milliseconds

const IndexPage = () => {
    const [isDevelop, setIsDevelop] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const uri = new URL(window.location.href);
        if (uri.searchParams.get("dev") === "true") {
            setIsDevelop(true);
        }

        // Cleanup function to clear timer on unmount
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    const handleStartPress = useCallback(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            setIsDevelop(true);
        }, TIME_TO_DEVELOP);
    }, []);

    const handleEndPress = useCallback(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    const navigationLinks = useMemo(() => (
        navItems.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
        ))
    ), []);

    const profileTags = useMemo(() => ([
        "Scenario writer",
        "Software developer",
        "Minimal / black & white",
    ]), []);


    return (
        <BlurFade duration={0.5} delay={0.2} offset={12} direction="up">
            <main className="min-h-screen bg-white px-4 py-6 text-black sm:px-6 lg:px-8">
                {!isDevelop ? (
                    <section className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
                        <BlurFade duration={0.55} delay={0.15} className="order-2 lg:order-1">
                            <div className="overflow-hidden rounded-[2rem] border border-black/15 bg-white">
                                <img
                                    src="tanahiro2010.jpeg"
                                    alt="tanahiro2010のアイコン"
                                    className="aspect-[4/5] w-full object-cover"
                                />
                            </div>
                        </BlurFade>

                        <BlurFade duration={0.55} delay={0.25} className="order-1 flex items-center lg:order-2">
                            <div className="w-full rounded-[2rem] border border-black/15 bg-white p-6 sm:p-8 lg:p-10">
                                <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-black/50">
                                    <span className="h-px w-10 bg-black/20" />
                                    relaxed minimal portfolio
                                </div>

                                <div className="space-y-5">
                                    <div>
                                        <h1 className="text-4xl font-semibold tracking-tight leading-tight sm:text-5xl" title="田中博悠">Hirohisa Tanaka</h1>
                                        <p className="mt-2 text-sm uppercase tracking-[0.28em] text-black/55">@tanahiro2010</p>
                                    </div>

                                    <p className="max-w-xl text-lg leading-8 text-black/85 sm:text-xl">
                                        I write scenarios and build software. This site keeps the same monochrome simplicity, but with a little more space to breathe.
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {profileTags.map((tag) => (
                                            <span key={tag} className="rounded-full border border-black/15 px-3 py-1 text-xs uppercase tracking-[0.24em] text-black/70">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="rounded-[1.5rem] border border-black/15 p-4 sm:p-5">
                                        <p className="text-sm leading-7 text-black/75 sm:text-base">
                                            I write scenarios for visual novels and develop software applications. Explore my works, notes, and links whenever you feel like it.
                                        </p>
                                        <div
                                            className="mt-4 cursor-pointer rounded-[1.25rem] border border-black/15 px-4 py-3 transition-colors hover:bg-black hover:text-white"
                                            onMouseDown={handleStartPress}
                                            onMouseUp={handleEndPress}
                                            onMouseLeave={handleEndPress}
                                        >
                                            <p className="text-sm font-medium leading-6 sm:text-base">
                                                Press and hold here if you want the compact view.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-3 pt-1">
                                        {navigationLinks}
                                    </div>
                                </div>
                            </div>
                        </BlurFade>
                    </section>
                ) : (
                    <BlurFade duration={0.5} delay={0.2} offset={12} direction="up" className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-3xl items-center">
                        <div className="w-full rounded-[2rem] border border-black/15 bg-white p-8 text-center sm:p-12">
                            <p className="text-xs uppercase tracking-[0.35em] text-black/50">compact view</p>
                            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl" title="田中博悠">Hirohisa Tanaka</h1>
                            <p className="mt-3 text-sm uppercase tracking-[0.28em] text-black/55">@tanahiro2010</p>
                            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-black/80">
                                I am a scenario writer and software developer.
                            </p>

                            <div className="mt-8 flex flex-wrap justify-center gap-3">
                                {navigationLinks}
                            </div>
                        </div>
                    </BlurFade>
                )}

            </main>
        </BlurFade>

    );
}

export default IndexPage;
