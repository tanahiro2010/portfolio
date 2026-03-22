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


    return (
        <BlurFade duration={0.5} delay={0.2} offset={12} direction="up">
            <main className="flex min-h-screen flex-col items-center justify-center bg-white text-black p-4">
                {!isDevelop ? (
                    <div className="w-full sm:w-4/5 max-w-6xl">
                        <div className="w-full flex flex-col items-center text-left sm:items-stretch sm:flex-row sm:space-x-8 gap-8 sm:gap-0">
                            <div className="w-3/4 sm:w-1/2 flex items-center justify-center">
                                <img src="tanahiro_and_lambda.jpeg" alt="tanahiro2010のアイコン" className="rounded-none border-4 border-black w-full object-cover shadow-none" />
                            </div>

                            <div className="w-full sm:w-1/2 flex flex-col justify-center p-2 sm:p-0">
                                <BlurFade duration={0.5} delay={0.7}>
                                    <div className="flex flex-col border-b-4 border-black pb-4 mb-6">
                                        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-none mb-2" title="田中博悠">Hirohisa Tanaka</h2>
                                        <p className="text-xl font-bold uppercase tracking-widest text-black">@tanahiro2010</p>
                                    </div>

                                    <div>
                                        <p className="font-black text-xl sm:text-2xl uppercase tracking-tighter mb-6 text-black">
                                            I am a scenario writer & software developer.
                                        </p>

                                        <div className="flex flex-col justify-between">
                                            <div className="text-black font-bold hidden sm:block space-y-6 text-lg leading-relaxed">
                                                <p>
                                                    I write scenarios for visual novels and develop software applications.
                                                    Welcome to my personal website where you can find my works, blogs, and links.
                                                </p>

                                                <div 
                                                    className="border-4 border-black transition-colors hover:bg-black hover:text-white cursor-pointer shadow-none" 
                                                    onMouseDown={handleStartPress} 
                                                    onMouseUp={handleEndPress} 
                                                    onMouseLeave={handleEndPress}
                                                >
                                                    <p className="p-5 font-bold">
                                                        Feel free to explore my portfolio and get in touch if you have any questions or collaboration ideas!
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                                { navigationLinks }
                                            </div>
                                        </div>
                                    </div>
                                </BlurFade>
                            </div>
                        </div>
                    </div>
                ) : (
                    <BlurFade duration={0.5} delay={0.2} offset={12} direction="up" className="text-center border-4 border-black p-8 sm:p-16 max-w-3xl w-full bg-white shadow-none">
                        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter mb-4 text-black" title="田中博悠">Hirohisa Tanaka</h1>
                        <h2 className="text-2xl font-bold uppercase tracking-widest border-b-4 border-black pb-6 mb-6 text-black">@tanahiro2010</h2>
                        <div className="text-xl font-black mb-8 uppercase tracking-widest text-black">
                            I am a scenario writer and software developer.
                        </div>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            { navigationLinks }
                        </div>
                    </BlurFade>
                )}

            </main>
        </BlurFade>

    );
}

export default IndexPage;