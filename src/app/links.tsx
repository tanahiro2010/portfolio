import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/animation/blur-fade";

type LinkItem = {
  label: string;
  href: string;
};

const LINKS: Array<LinkItem> = [
  { label: "YouTube",   href: "/youtube" },
  { label: "Twitter",   href: "/twitter" },
  { label: "Instagram", href: "/instagram" },
  { label: "Kakuyomu",  href: "/kakuyomu" },
  { label: "GitHub",    href: "/github" },
  { label: "Qiita",     href: "/blogs" },
  { label: "Zenn",      href: "/zenn" },
  { label: "Contact",   href: "/contact" },
];

const Links = () => {
    return (
        <div className="mx-auto max-w-2xl bg-white px-4 py-10 text-black md:py-16">
            <BlurFade delay={0.1} inView>
                <div className="mb-10 rounded-[2rem] border border-black/15 bg-white p-6 text-center md:p-8">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-black/50">directory</p>
                    <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black md:text-5xl">Links</h1>
                    <p className="mt-4 text-base leading-8 text-black/75 md:text-lg">
                        各種プラットフォームやSNSのアカウント一覧です。
                    </p>
                </div>
            </BlurFade>

            <ul className="flex flex-col gap-4" role="list">
                {LINKS.map((link, idx) => (
                    <BlurFade key={link.href} delay={0.2 + idx * 0.05} inView>
                        <li>
                            <Link
                                to={link.href}
                                aria-label={`${link.label} を開く`}
                                title={link.label}
                                className="group flex items-center justify-between rounded-[1.5rem] border border-black/15 p-5 md:p-6 transition-colors hover:bg-black hover:text-white"
                            >
                                <span className="truncate text-xl font-semibold tracking-tight text-black group-hover:text-white transition-colors">
                                    {link.label}
                                </span>
                                <div className="shrink-0 rounded-full border border-black/15 bg-white p-2 transition-colors group-hover:border-white/40 group-hover:bg-black">
                                    <ArrowRight className="w-6 h-6 text-black group-hover:text-white transition-colors" strokeWidth={3} />
                                </div>
                            </Link>
                        </li>
                    </BlurFade>
                ))}
            </ul>
        </div>
    );
}

export default Links;