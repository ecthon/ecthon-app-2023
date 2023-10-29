import { Divider } from "../Divider"
import { Socials } from "./Socials"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="flex w-full h-20 m-auto">
            <div className="flex justify-between items-center mx-auto w-3/5">
                <div className="flex items-center gap-2">
                    <p className="text-zinc-500">{currentYear}</p>
                    <Divider />
                    <p className="text-zinc-500">
                        Code white Next.js 🖤 by
                    </p>
                    <p className="text-zinc-500 hover:text-gray-900 font-medium cursor-pointer">@ecthon</p>
                </div>
                <Socials />
            </div>
        </footer>
    )
}