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
        <div className="max-w-2xl mx-auto px-4 py-12 md:py-24">
            <BlurFade delay={0.1} inView>
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">Links</h1>
                    <p className="text-lg text-muted-foreground">
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
                                className="group flex items-center justify-between border border-border rounded-2xl p-5 md:p-6 transition-all hover:bg-muted/50 hover:border-primary/30"
                            >
                                <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors truncate">
                                    {link.label}
                                </span>
                                <div className="shrink-0 p-2 md:p-2.5 rounded-full border border-border bg-background group-hover:border-primary/50 group-hover:bg-primary/5 transition-colors">
                                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
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