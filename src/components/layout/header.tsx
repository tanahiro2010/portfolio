// import { useEffect, useState } from "react";
import { Show } from "../responsive/show";
import { Link } from "@/components/ui/link";


const Header = () => {

    return (
        <header className="m-5 p-3 rounded-lg border border-gray-200 mb-5 flex flex sm:flex-row items-center justify-between">
            <h1 className="text-2xl font-bold">
                <a href="/" className="p-0">tanahiro2010</a>
            </h1>

            <Show show="desktop" className="text-gray-600">
                Scenario Writer / Software Developer
            </Show>


            <Show show="desktop" className="text-gray-600 flex items-center space-x-2">
                <Link href="https://github.com/tanahiro2010">GitHub</Link>
                <Link href="https://twitter.com/tanahiro2010">Twitter</Link>
            </Show>

        </header>
    );
}

export default Header;