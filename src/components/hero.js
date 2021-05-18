import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import IconArrowDown from "../assets/svg/IconArrowDown"
import Cursor from ".//Cursor";
import { useContext } from "react";
import { MouseContext } from "../context/mouse-context";

export default function Hero() {
    const { cursorChangeHandler } = useContext(MouseContext);
    return (
        <>
          <div className="grid grid-cols-12 gap-8 h-screen w-10/12 mx-auto pt-20">
            <div className="col-span-12 grid grid-cols-12 gap-8 pt-20 md:pt-60">
              <h1 className="col-span-12 lg:col-span-3 text-6xl font-rubik font-bold text-gray-700 uppercase">Hello,</h1>
              <h3 className="col-span-12 lg:col-span-9 text-4xl font-rubik font-light leading-normal text-gray-700">I’m a <span className="font-semibold">UI/UX Designer</span> who creates <span className="font-semibold">digital interfaces</span>, <span className="font-semibold">prototypes</span> and <span className="font-semibold">front-ends it</span>. Apart from that I love to illustrate and create beautiful visual concepts.</h3>
            </div>
            <Cursor />
              <div className="col-span-12 flex flex-col justify-end mb-10 text-gray-700">
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
      </ >

    )
};
