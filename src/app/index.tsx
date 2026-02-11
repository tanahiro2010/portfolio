import { BlurFade } from "@/components/animation/blur-fade";

const Link = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
        <a href={href} className="b py-2 px-4 inline-flex items-center justify-center">
            {children}
        </a>
    );
}

const isDevelop: boolean = true;

const navItems = [
    { href: "/works", label: "Works" },
    { href: "/blogs", label: "Blogs" },
    { href: "/links", label: "Links" },
    { href: "/contact", label: "Contact" },
]

const IndexPage = () => {
    return (
        <BlurFade duration={0.5} delay={0.2} offset={12} direction="up">
            <main className="flex min-h-screen flex-col items-center justify-center">
                {isDevelop ? (
                    <div className="sm:w-3/4">
                        <div className="w-full flex flex-col space-x-4 items-center text-left sm:items-stretch sm:flex-row">
                            <div className="w-2/3 sm:w-1/2 p-3">
                                <img src="tanahiro_and_lambda.jpeg" alt="tanahiro2010のアイコン" className="rounded-md" />
                            </div>

                            <div className="w-2/3 sm:w-1/2 p-0 p-2 sm:p-3">
                                <BlurFade duration={0.5} delay={0.7}>
                                    <div className="flex flex-col">
                                        <h2 className="text-2xl font-bold leading-tight">田中博悠</h2>
                                        <p className="mt-1 text-sm text-gray-400 leading-tight">@tanahiro2010</p>
                                    </div>

                                    <div className="mt-5">
                                        <p className="text-gray-600 text-center border-b pb-3">
                                            I am a scenario writer and software developer.
                                        </p>

                                        <div className="flex flex-col justify-between mt-5">
                                            <div className="text-gray-600 hidden sm:block space-y-4">
                                                <p>
                                                    I write scenarios for visual novels and develop software applications. 
                                                    Welcome to my personal website where you can find my works, blogs, and links.
                                                </p>

                                                <div className="border">
                                                    <p className="p-3 bg-gray-100">
                                                        Feel free to explore my portfolio and get in touch if you have any questions or collaboration ideas!
                                                    </p>
                                                </div>
                                                
                                            </div>



                                            <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-center sm:space-x-4 space-y-2 sm:space-y-0 text-center">
                                                {navItems.map((item) => (
                                                    <Link key={item.href} href={item.href}>{item.label}</Link>
                                                ))}
                                            </div>
                                        </div>


                                    </div>
                                </BlurFade>

                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <h1 className="text-3xl font-bold">田中博悠 - tanahiro2010</h1>
                        <div className="mt-5">
                            I am a scenario writer and software developer.
                        </div>

                        <div className="mt-5 flex space-x-4">
                            {navItems.map((item) => (
                                <Link key={item.href} href={item.href}>{item.label}</Link>
                            ))}
                        </div>
                    </>
                )}


            </main>
        </BlurFade>

    );
}

export default IndexPage;