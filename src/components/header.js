import React from "react"
import Link from 'gatsby-link'
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function Header() {
    return (
        <nav className="absolute inset-0 z-10 w-10/12 h-20 flex mx-auto items-center justify-between font-rubik text-gray-700">
            <div>
                <a href="https://www.linkedin.com/in/fernanda-freitas-martinez-8b9a792a/" target="_blank" rel="noreferrer" className="hidden md:inline text-xl font-medium">@fernanda-freitas</a>
                <a href="https://www.linkedin.com/in/fernanda-freitas-martinez-8b9a792a/" target="_blank" rel="noreferrer" className="inline md:hidden text-xl font-medium">@fernanda</a>
            </div>
            <div className="space-x-6 md:space-x-12 text-sm">
                <AnchorLink to="/#work" title="All works" className="font-rubik uppercase hover:text-purple-600">Work</AnchorLink>
                <AnchorLink to="/" title="All works" className="font-rubik uppercase hover:text-purple-600">About</AnchorLink>
                <AnchorLink to="/" title="All works" className="font-rubik uppercase hover:text-purple-600">Contact</AnchorLink>
            </div>
        </nav>
    )
};
