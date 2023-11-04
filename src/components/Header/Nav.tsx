import { Socials } from "../Footer/Socials";

export function Nav() {
    return(
        <div className="flex w-full h-full bg-white absolute z-10">
            <div className="flex flex-col w-3/5 h-3/5 mx-auto justify-center">
                <nav className="flex flex-col gap-4 mb-16">
                    <a href="#" className="text-3xl font-semibold hover:text-blue-700">Home</a>
                    <a href="#" className="text-3xl font-semibold hover:text-blue-700">Sobre</a>
                    <a href="#" className="text-3xl font-semibold hover:text-blue-700">Contato</a>
                </nav>
                <Socials />
            </div>
        </div>
    )
}