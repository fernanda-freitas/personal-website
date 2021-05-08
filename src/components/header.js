import React from "react"
import Link from 'gatsby-link'

export default function Header() {
    return (
        <div>
            <div className="absolute inset-0 z-10 w-10/12 h-20 flex mx-auto items-center justify-between font-rubik text-gray-700">
                <div>
                    <Link to="..//" className="text-xl font-medium">@fernanda-freitas</Link>
                </div>
                <div className="space-x-6 md:space-x-12 text-sm">
                    <Link to="../about/" className="font-rubik uppercase hover:font-medium">Work</Link>
                    <Link to="../about/" className="font-rubik uppercase hover:font-medium">About</Link>
                    <Link to="../about/" className="font-rubik uppercase hover:font-medium">Contact</Link>
                </div>
            </div>
        </div>
    )
};
