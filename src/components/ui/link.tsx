import { cn } from "@/lib/utils";

type LinkProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
}
const Link = ({ href, children, className = "" }: LinkProps) => {
    return (
        <a href={href} className={cn("inline-flex items-center justify-center rounded-full border border-black/15 px-4 py-2 text-sm font-medium tracking-tight text-black transition-colors hover:bg-black hover:text-white", className)}>
            {children}
        </a>
    );
}

export { Link };