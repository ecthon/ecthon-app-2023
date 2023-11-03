'use client'
import Hamburger from "hamburger-react";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive';

export function Header() {
    const [isOpen, setOpen] = useState(false)
    // Detectar se a tela é menor que 640px (pode ajustar o valor conforme necessário)
    const isMobile = useMediaQuery({ maxWidth: 640})
    return(
        <header>
            <div className="flex justify-between w-3/5 max-sm:w-4/5 h-20 max-sm:h-auto items-center mx-auto">
                <a href="#" className="text-3xl max-sm:text-xl text-gray-900 font-bold">ecthon<span className="text-emerald-500">.</span></a>
                <nav className="flex">
                    <Hamburger rounded toggled={isOpen} toggle={setOpen} size={isMobile ? 16 : 32} />
                </nav>
            </div>
        </header>
    )
}