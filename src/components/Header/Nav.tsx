import { Socials } from "../Footer/Socials";

export function Nav() {
    return(
        <div className="flex w-full h-full bg-white absolute z-10">
            <div className="flex flex-col w-3/5 max-sm:w-full h-3/5 max-sm:h-80 mx-auto justify-center max-sm:items-center">
                <nav className="flex flex-col gap-4 mb-16 max-sm:mb-8 max-sm:items-center">
                    <a href="#" className="text-3xl max-sm:text-lg font-semibold hover:text-blue-700">Home</a>
                    <a href="#" className="text-3xl max-sm:text-lg font-semibold hover:text-blue-700">Sobre</a>
                    <a href="#" className="text-3xl max-sm:text-lg font-semibold hover:text-blue-700">Contato</a>
                </nav>
                <Socials />
            </div>
        </div>
    )
}