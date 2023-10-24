'use client'
import Hamburger from "hamburger-react";
import { useState } from "react";

export function Header() {
    const [isOpen, setOpen] = useState(false)
    return(
        <header>
            <div className="flex justify-between w-3/5 h-20 items-center mx-auto">
                <a href="">ecthon</a>
                <nav className="flex">
                    <Hamburger rounded toggled={isOpen} toggle={setOpen}/>
                </nav>
            </div>
        </header>
    )
}