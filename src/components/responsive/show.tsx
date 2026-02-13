import { cn } from "@/lib/utils"

type Props = {
    children: React.ReactNode;
    show: "mobile" | "desktop";
    className?: string;
}

const Show = ({ children, show, className = "" }: Props) => {
    const visibility = show === "mobile" ? "block sm:hidden" : "hidden sm:block";
    return (
        <div className={cn(className, visibility)}>
            { children }
        </div>
    );
}

export { Show };