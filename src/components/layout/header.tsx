// import { useEffect, useState } from "react";
import { Show } from "../responsive/show";
import { Link } from "@/components/ui/link";


const Header = () => {

    return (
        <header className="w-full border-b-4 border-black py-4 bg-white text-black">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                <h1 className="text-2xl font-black uppercase tracking-widest">
                    <a href="/" className="p-0 text-black hover:bg-black hover:text-white transition-colors duration-200">tanahiro2010</a>
                </h1>

                <Show show="desktop" className="text-black font-bold uppercase tracking-widest text-sm">
                    <span>Scenario Writer / Software Developer</span>
                </Show>

                <div className="text-black font-bold flex items-center space-x-6">
                    <Link href="/github">GitHub</Link>
                    <Link href="/twitter">Twitter</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;