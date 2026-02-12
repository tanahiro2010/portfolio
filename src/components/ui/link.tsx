const Link = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
        <a href={href} className="b py-2 px-4 inline-flex items-center justify-center">
            {children}
        </a>
    );
}

export { Link };