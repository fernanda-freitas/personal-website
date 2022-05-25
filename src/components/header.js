import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Link from 'gatsby-link'
import Cursor from ".//Cursor";
import { useContext } from "react";
import { MouseContext } from "../context/mouse-context";

export default function Header() {
    const { cursorChangeHandler } = useContext(MouseContext);

    return (
        < >
            <Cursor />
            <nav className="absolute inset-0 z-10 w-10/12 h-20 flex mx-auto items-center justify-between font-rubik text-gray-700">
                <div>
                    <Link to="/" rel="noreferrer" className="hidden md:inline text-lg">@fernanda-freitas</Link>
                    <Link to="/" rel="noreferrer" className="inline md:hidden text-lg">@fernanda</Link>
                </div>
                <div className="flex space-x-6 md:space-x-12 text-sm">
                    <div
                        onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}
                        role="link"
                        tabIndex="0">
                        <a className="font-rubik uppercase hover:text-purple-600" href="https://www.instagram.com/fernanda_freitas_martinez/" target="_blank">Instagram</a>
                    </div>
                    <div
                        onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}
                        role="link"
                        tabIndex="0">
                        <a className="font-rubik uppercase hover:text-purple-600" href="https://www.linkedin.com/in/fernanda-freitas-martinez-8b9a792a/" target="_blank">Linkedin</a>
                    </div>
                    <div
                        onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}
                        role="link"
                        tabIndex="0">
                        <AnchorLink to="/#work" title="All works" className="font-rubik uppercase hover:text-purple-600">Work</AnchorLink>
                    </div>
                </div>
            </nav>
        </ >
    )
};
