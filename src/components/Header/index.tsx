'use client'
import Hamburger from "hamburger-react";
import { useState } from "react";

export function Header() {
    const [isOpen, setOpen] = useState(false)
    return(
        <header>
            <div className="flex justify-between w-3/5 sm:w-4/5 h-20 items-center mx-auto">
                <a href="#" className="text-3xl sm:text-2xl sm:text-blue-600 text-gray-900 font-bold">ecthon<span className="text-emerald-500">.</span></a>
                <nav className="flex">
                    <Hamburger rounded toggled={isOpen} toggle={setOpen}/>
                </nav>
            </div>
        </header>
    )
}