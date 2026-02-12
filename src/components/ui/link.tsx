import { cn } from "@/lib/utils";

type LinkProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
}
const Link = ({ href, children, className = "" }: LinkProps) => {
    return (
        <a href={href} className={`b ${cn("py-2 px-4 inline-flex items-center justify-center", className)}`}>
            {children}
        </a>
    );
}

export { Link };