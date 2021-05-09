import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Cursor from ".//Cursor";
import { useContext } from "react";
import { MouseContext } from "../context/mouse-context";

export default function Header() {
    const { cursorChangeHandler } = useContext(MouseContext);

    return (
        < >
            <Cursor />
            <nav className="absolute inset-0 z-10 w-10/12 h-20 flex mx-auto items-center justify-between font-rubik text-gray-900">
                <div>
                    <a href="https://www.linkedin.com/in/fernanda-freitas-martinez-8b9a792a/" target="_blank" rel="noreferrer" className="hidden md:inline text-xl font-medium">@fernanda-freitas</a>
                    <a href="https://www.linkedin.com/in/fernanda-freitas-martinez-8b9a792a/" target="_blank" rel="noreferrer" className="inline md:hidden text-xl font-medium">@fernanda</a>
                </div>
                <div className="flex space-x-6 md:space-x-12 text-sm">
                    <div
                        onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}
                        role="link"
                        tabIndex="0">
                        <AnchorLink to="/#work" title="All works" className="font-rubik uppercase hover:text-purple-600">Work</AnchorLink>
                    </div>
                    <div
                        onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}
                        role="link"
                        tabIndex="0">
                        <AnchorLink to="/#about" title="About" className="font-rubik uppercase hover:text-purple-600">About</AnchorLink>
                    </div>
                    <div
                        onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}
                        role="link"
                        tabIndex="0">
                        <AnchorLink to="/#contact" title="Contact" className="font-rubik uppercase hover:text-purple-600">Contact</AnchorLink>
                    </div>
                </div>
            </nav>
        </ >
    )
};
