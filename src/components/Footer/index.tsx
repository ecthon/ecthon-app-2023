import { Divider } from "../Divider"
import { Socials } from "./Socials"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="flex w-full h-20 max-sm:h-auto m-auto">
            <div className="flex max-sm:flex-col-reverse w-3/5 max-sm:w-4/5 max-sm:gap-2 max-sm:my-4 justify-between items-center mx-auto">
                <div className="flex items-center gap-2 max-sm:gap-1">
                    <p className="text-zinc-500 max-sm:text-sm">{currentYear}</p>
                    <Divider />
                    <p className="text-zinc-500 max-sm:text-sm">
                        Code white Next.js 🖤 by
                    </p>
                    <p className="text-zinc-500 max-sm:text-sm hover:text-gray-900 font-medium cursor-pointer">@ecthon</p>
                </div>
                <Socials />
            </div>
        </footer>
    )
}