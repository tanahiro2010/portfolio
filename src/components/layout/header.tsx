// import { useEffect, useState } from "react";
import { Show } from "../responsive/show";
import { Link } from "@/components/ui/link";


const Header = () => {

    return (
        <header className="w-full border-b border-black/15 bg-white text-black">
            <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row">
                <h1 className="text-xl font-semibold tracking-tight">
                    <a href="/" className="text-black transition-opacity duration-200 hover:opacity-60">tanahiro2010</a>
                </h1>

                <Show show="desktop" className="text-sm text-black/60">
                    <span>Scenario Writer / Software Developer</span>
                </Show>

                <nav className="flex items-center gap-3 text-black">
                    <Link href="#about">About</Link>
                    <Link href="#works">Works</Link>
                    <Link href="#links">Links</Link>
                    <Link href="#contact">Contact</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;