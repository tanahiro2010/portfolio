// import { useEffect, useState } from "react";
import { Show } from "../responsive/show";
import { Link } from "@/components/ui/link";


const Header = () => {

    return (
        <header className="w-full border-b border-gray-100 py-4">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                <h1 className="text-2xl font-bold">
                    <a href="/" className="p-0 text-gray-900">tanahiro2010</a>
                </h1>

                <Show show="desktop" className="text-gray-600">
                    <span>Scenario Writer / Software Developer</span>
                </Show>

                <div className="text-gray-600 flex items-center space-x-3">
                    <Link href="https://github.com/tanahiro2010">GitHub</Link>
                    <Link href="https://twitter.com/tanahiro2010">Twitter</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;