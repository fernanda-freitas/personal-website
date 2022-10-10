import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import IconArrowDown from "../assets/svg/IconArrowDown"
import Cursor from ".//Cursor"
import { useContext } from "react"
import { MouseContext } from "../context/mouse-context"
import ProfileImage from "../assets/images/profile.png"
import IconTalk from "../assets/svg/IconTalk"
import IconStar from "../assets/svg/IconStar"
import IconGlobe from "../assets/svg/IconGlobe"
import IconPin from "../assets/svg/IconPin"

export default function Hero() {
  const { cursorChangeHandler } = useContext(MouseContext)
  return (
    <>
      <div className="flex flex-col grid-cols-12 gap-8 w-10/12 mx-auto">
        <div className="col-span-12 md:col-span-10 gap-8 pt-40 md:pt-60 text-center mx-auto">
          <img className="w-auto h-36 md:h-40 mx-auto" src={ProfileImage} alt="Alterar alt"/>
          <h4 className="mt-6 text-xl md:text-2xl font-rubik font-regular leading-relaxed text-gray-700">Frontend developer and Ux/Ui designer</h4>
          <h1 className="title text-5xl md:text-6xl mt-4 font-rubik font-semibold text-gray-700">Fernanda Freitas</h1>
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12 mt-8">
            <div className="flex space-x-1 mx-auto">
              <IconPin />
              <h5 className="md:text-xl font-rubik font-regular leading-relaxed text-gray-700">Lisbon, Portugal</h5>
            </div>
            <div className="flex space-x-1 mx-auto">
              <IconTalk />
              <h5 className="md:text-xl font-rubik font-regular leading-relaxed text-gray-700">English, Portuguese</h5>
            </div>
            <div className="flex space-x-1 mx-auto">
              <IconStar />
              <h5 className="md:text-xl font-rubik font-regular leading-relaxed text-gray-700">Open to projects</h5>
            </div>
            <div className="flex space-x-1 mx-auto">
              <IconGlobe />
              <h5 className="md:text-xl font-rubik font-regular leading-relaxed text-gray-700">Remote</h5>
            </div>
          </div>
        </div>
        <Cursor />
        <div className="col-span-12 md:col-span-8 flex flex-col mx-auto mb-10 text-gray-700">
          <div
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
            role="link"
            tabIndex="0"
            className="flex"
          >
            <AnchorLink to="/#work" title="All works" className="mx-auto">
              <IconArrowDown />
            </AnchorLink>
          </div>
        </div>
      </div>
    </>
  )
}
