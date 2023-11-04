import { Socials } from "../Footer/Socials";

const paths = [
    {label: "Home", url: "#"},
    {label: "Sobre", url: "#"},
    {label: "Contato", url: "#"},
]

export function Nav() {
    return(
        <div className="flex w-full h-full bg-white absolute z-10">
            <div className="flex flex-col w-3/5 max-sm:w-full h-3/5 max-sm:h-80 mx-auto justify-center max-sm:items-center">
                <nav className="flex flex-col gap-4 mb-16 max-sm:mb-8 max-sm:items-center">
                    {paths.map(path => (
                        <a
                            key={path.label}
                            href={path.url === "Home" ? "/": path.url.toLowerCase()}
                            className="text-3xl max-sm:text-lg font-semibold hover:text-blue-700">
                            {path.label}
                        </a>
                    ))}
                </nav>
                <Socials />
            </div>
        </div>
    )
}