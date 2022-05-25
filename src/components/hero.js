import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import IconArrowDown from "../assets/svg/IconArrowDown"
import Cursor from ".//Cursor"
import { useContext } from "react"
import { MouseContext } from "../context/mouse-context"

export default function Hero() {
  const { cursorChangeHandler } = useContext(MouseContext)
  return (
    <>
      <div className="grid grid-cols-12 gap-8 min-h-172 w-10/12 mx-auto md:pt-20">
        <div className="col-span-12 md:col-span-8 gap-8 pt-40 md:pt-60">
          <h1 className="title text-5xl md:text-6xl font-rubik font-bold text-gray-700 uppercase">
            Hello,
          </h1>
          <h3 className="introduction mt-8 font-rubik font-light text-gray-700">
            I’m a <span className="font-semibold">UI/UX Designer</span> who
            creates <span className="font-semibold">digital interfaces</span>,{" "}
            <span className="font-semibold">prototypes</span> and{" "}
            <span className="font-semibold">front-ends it 🚀</span> . Apart from
            that I love to illustrate and create beautiful visual concepts.
          </h3>
        </div>
        <Cursor />
        <div className="col-span-12 md:col-span-8 flex flex-col justify-end mb-10 text-gray-700">
          <span className="font-rubik text-sm uppercase">See Projects</span>
          <div
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
            role="link"
            tabIndex="0"
          >
            <AnchorLink to="/#work" title="All works">
              <IconArrowDown />
            </AnchorLink>
          </div>
        </div>
      </div>
    </>
  )
}
