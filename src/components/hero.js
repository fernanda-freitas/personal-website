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
        <div className="col-span-12 md:col-span-10 gap-8 pt-40 md:pt-60">
          <h1 className="title text-5xl md:text-6xl font-rubik font-bold text-gray-700 uppercase">
            Hello,
          </h1>
          <h3 className="introduction mt-8 font-rubik font-light text-gray-700">
            I’m a <span className="font-semibold">Fullstack Dev student</span> with years of experience in <span className="font-semibold">Ux/Ui Design</span> (usability, wireframes, digital interfaces, prototypes and more recently, development) 🚀
          </h3>
          <h5 className="mt-6 text-xl md:text-1xl font-rubik font-light leading-relaxed text-gray-500">
            I'm currently perfecting my Fullstack Dev skills with <a className="font-rubik text-purple-600" href="https://www.switchup.org/bootcamps/le-wagon" target="_blank"> Le Wagon's </a> super imersive Bootcamp - considered the best bootcamp according to
            <a className="font-rubik text-purple-600" href="https://www.switchup.org/bootcamps/le-wagon" target="_blank"> Switchup </a>
            and <a className="font-rubik text-purple-600" href="https://www.coursereport.com/schools/le-wagon" target="_blank">Course Report</a>.
            This is the core of what I've beeng learning: Ruby, SQLite Postres sql, JavaScript (ES6, AJAX, HTML, CSS (SCSS), Git & Github, Heroku.
          </h5>
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
