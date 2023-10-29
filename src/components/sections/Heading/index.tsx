'use client'
import { ArrowUpRight } from "lucide-react";
import './borderEffect.css'
export function Heading() {
    return(
        <div className="flex flex-col items-center justify-center w-3/5 h-auto my-20 mx-auto">
            <p className="text-xl text-gray-900 mb-10">Olá, me chamo <span className="text-purple-800 font-semibold">Ecthon!</span></p>
            <h1 className="text-6xl text-gray-900 text-center leading-tight max-w-2xl mb-10">Freelance, Developer & UI Designer.✨</h1>
            <p className="text-xl text-gray-900 text-center max-w-3xl">Desenvolvendo soluções criativas e inovadoras, sempre com o objetivo de proporcionar a melhor experiência ao usuário.</p>
            <a href="#" className="text-zinc-300 hover:text-white gradient-border flex justify-center items-center bg-gray-900 w-auto gap-4 px-2 mt-16 h-16 rounded-full">
                <p className="pl-4 text-lg font-medium transition-all duration-300">Enviar mensagem</p>
                <div className="flex bg-purple-800 w-12 h-12 rounded-full items-center justify-center">
                <ArrowUpRight color="white" size={32}/>
                </div>
            </a>
        </div>
    )
}