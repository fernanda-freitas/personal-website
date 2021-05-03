import React from "react"
import "../styles/global.css"
import Link from 'gatsby-link'

export default function Header() {
    return (
        <div className="sticky max-w-7xl h-20 flex mx-auto items-center justify-between font-rubik text-gray-700">
            <div>
                <Link to="..//" className="text-lg font-medium">@fernanda-martinez</Link>
            </div>
            <div className="space-x-12">
                <Link to="../about/" className="uppercase">Work</Link>
                <Link to="../about/" className="uppercase">About</Link>
                <Link to="../about/" className="uppercase">Contact</Link>
            </div>
        </div>
    )
};
