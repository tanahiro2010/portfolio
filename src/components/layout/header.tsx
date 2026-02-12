// import { useEffect, useState } from "react";
import { Show } from "../responsive/show";


const Header = () => {

    return (
        <header className="m-5 p-3 rounded-lg border border-gray-200 mb-5 flex flex-col sm:flex-row items-center justify-between">
            <h1 className="text-2xl font-bold">
                <a href="/" className="p-0">tanahiro2010</a>
            </h1>

            <Show show="desktop" className="text-gray-600">
                Scenario Writer / Software Developer
            </Show>
        </header>
    );
}

export default Header;