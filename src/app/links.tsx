import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/animation/blur-fade";

type LinkItem = {
  label: string;
  href: string;
};

const LINKS: Array<LinkItem> = [
  { label: "YouTube",  href: "/youtube" },
  { label: "Twitter",  href: "/twitter" },
  { label: "Kakuyomu", href: "/kakuyomu" },
  { label: "GitHub",   href: "/github" },
  { label: "Qiita",    href: "/blogs" },
  { label: "Zenn",     href: "/zenn" },
  { label: "Contact",  href: "/contact" },
];

const Links = () => {
    return (
        <div className="max-w-2xl mx-auto px-4 py-12 md:py-24 bg-white text-black">
            <BlurFade delay={0.1} inView>
                <div className="mb-12 text-center border-b-4 border-black pb-4">
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-widest mb-4 text-black">Links</h1>
                    <p className="text-lg font-bold text-black">
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
                                className="group flex items-center justify-between border-4 border-black rounded-none p-5 md:p-6 transition-colors hover:bg-black hover:text-white"
                            >
                                <span className="text-xl font-black uppercase tracking-widest text-black group-hover:text-white transition-colors truncate">
                                    {link.label}
                                </span>
                                <div className="shrink-0 p-2 md:p-2.5 rounded-none border-4 border-black bg-white group-hover:border-white group-hover:bg-black transition-colors">
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