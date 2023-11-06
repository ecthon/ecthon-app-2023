'use client'
import React, { useState } from "react";
import Hamburger from 'hamburger-react'
import { useMediaQuery } from "react-responsive";
import { Nav } from "./Nav";

export function Header() {
  const [isOpen, setOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 640 });

  const toggleMenu = () => {
    setOpen(!isOpen);
    console.log(isMobile)
  };

  return (
    <div>
      <header>
        <div className="flex justify-between w-3/5 max-sm:w-4/5 h-20 max-sm:h-12 items-center mx-auto">
          <a href="#" className="text-3xl max-sm:text-xl text-gray-900 font-bold">
            ecthon<span className="text-emerald-500">.</span>
          </a>
          <div className="flex">
            <button onClick={toggleMenu} className="hidden max-sm:inline-block">
                <Hamburger rounded distance="sm" hideOutline={false} size={16} />
            </button>
            <button onClick={toggleMenu} className="sm:inline-block max-sm:hidden">
                <Hamburger rounded distance="sm" hideOutline={false} size={32} />
            </button>
          </div>
        </div>
      </header>
      {isOpen ? <Nav /> : <></>}
    </div>
  );
}
