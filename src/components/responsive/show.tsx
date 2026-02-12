import { cn } from "@/lib/utils"

type Props = {
    children: React.ReactNode;
    show: "mobile" | "desktop";
    className?: string;
}

const Show = ({ children, show, className = "" }: Props) => {
    return (
        <div className={`${cn(`${show === "mobile" ? "block sm:hidden" : "hidden sm:block"}`, className)}`}>
            { children }
        </div>
    );
}

export { Show };