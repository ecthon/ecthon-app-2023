import { ArrowUpRight } from "lucide-react";

export function Heading() {
    return(
        <div className="flex flex-col items-center justify-center w-3/5 h-auto my-20 mx-auto">
            <p className="text-xl text-gray-800 mb-10">Olá, me chamo <span className="text-purple-800 font-semibold">Ecthon!</span></p>
            <h1 className="text-6xl text-center leading-tight max-w-2xl mb-10">Freelance, Developer & UI Designer.✨</h1>
            <p className="text-xl text-gray-800 text-center max-w-3xl">Desenvolvendo soluções criativas e inovadoras, sempre com o objetivo de proporcionar a melhor experiência ao usuário.</p>
            <a href="#" className="flex justify-center items-center bg-gray-950 w-auto gap-4 px-2 mt-16 h-16 rounded rounded-full">
                <p className="text-white pl-4 text-lg font-medium">Enviar mensagem</p>
                <div className="flex bg-purple-800 w-12 h-12 rounded-full items-center justify-center">
                <ArrowUpRight color="white" size={32}/>
                </div>
            </a>
        </div>
    )
}