'use client'
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { useMediaQuery } from "react-responsive";
import { Nav } from "./Nav";

export function Header() {
  const [isOpen, setOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 640 });

  const menuStyle = {
    position: "fixed",
    top: 0,
    left: isOpen ? 0 : "-100%", // A posição inicial do menu fora da tela
    width: isMobile ? "100%" : "300px",
    height: "100%",
    backgroundColor: "white",
    transition: "left 0.3s", // Aplicando a transição na propriedade 'left'
  };

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <header>
        <div className="flex justify-between w-3/5 max-sm:w-4/5 h-20 items-center mx-auto">
          <a href="#" className="text-3xl max-sm:text-xl text-gray-900 font-bold">
            ecthon<span className="text-emerald-500">.</span>
          </a>
          <nav className="flex">
            <Hamburger
              rounded
              toggled={isOpen}
              toggle={toggleMenu}
              size={isMobile ? 16 : 32}
            />
          </nav>
        </div>
      </header>
      {isOpen ? <Nav /> : <></>}
    </div>
  );
}
