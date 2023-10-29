import { FaDiscord, FaLinkedinIn, FaGithub } from 'react-icons/fa'

export function Socials() {
    const socials = [
        {icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/ecthon/"},
        {icon: <FaGithub/>, path: "https://github.com/ecthon"},
        {icon: <FaDiscord/>, path: "#"},
    ]

    return (
        <nav className='flex'>
            <ul className='flex list-none gap-4'>
                {socials.map((social, index) => (
                    <li key={index}>
                        <a href={social.path} target='_blank' className='flex
                        p-2 rounded-full bg-transparent text-gray-900 hover:text-white border-spacing-2 border border-transparent hover:bg-gray-900'>
                            {social.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}