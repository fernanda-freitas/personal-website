import React from "react"
// Components
import Hero from "../components/hero"
import Work from "../components/work"
import Cursor from "../components/Cursor";
import { useContext } from "react";
import { MouseContext } from "../context/mouse-context";

// Thumbnail Images
import IconBehance from "../assets/svg/IconBehance.js"
import IconDribbble from "../assets/svg/IconDribbble.js"
import IconInstagram from "../assets/svg/IconInstagram.js"
import IconLinkedin from "../assets/svg/IconLinkedin.js"
import IconSoundcloud from "../assets/svg/IconSoundcloud.js"


export default function HomePage() {
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <>
        <Hero></Hero>
        <Work></Work>
        <Cursor />
        <section id="about" className="h-screen bg-gray-100">
          <div className="w-10/12 mx-auto py-40 grid grid-cols-12 grid-rows-2 gap-8">
              <h1 className="col-span-12 row-span-1 lg:col-span-3 text-5xl font-rubik font-bold text-gray-900">About</h1>
              <div className="col-span-12 row-span-1 lg:col-span-8">
                <p className="font-rubik text-lg text-gray-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc. Ligula ullamcorper malesuada proin libero nunc. Vitae congue eu consequat ac felis donec et odio pellentesque. Tincidunt lobortis feugiat vivamus at augue. Turpis egestas maecenas pharetra convallis posuere. Integer vitae justo eget magna fermentum iaculis eu non.</p>
                <p className="font-rubik text-lg text-gray-900">Risus viverra adipiscing at in tellus integer feugiat. Egestas egestas fringilla phasellus faucibus scelerisque. Ultricies leo integer malesuada nunc. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
              </div>
            <div className="flex col-start-4 col-span-8 row-start-2 space-x-6">
              <a 
              href="/" 
              target="_blank" 
              rel="noreferrer"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              tabIndex="0"
              className="social-icon"
              >
                <IconBehance />
              </a>
              <a 
              href="/" 
              target="_blank" 
              rel="noreferrer"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              tabIndex="0"
              className="social-icon"
              >
                <IconDribbble />
              </a>
              <a 
              href="/" 
              target="_blank" 
              rel="noreferrer"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              tabIndex="0"
              className="social-icon"
              >
                <IconInstagram />
              </a>
              <a 
              href="/" 
              target="_blank" 
              rel="noreferrer"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              tabIndex="0"
              className="social-icon"
              >
                <IconLinkedin />
              </a>
              <a 
              href="/" 
              target="_blank" 
              rel="noreferrer"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              tabIndex="0"
              className="social-icon"
              >
                <IconSoundcloud />
              </a>
            </div>
          </div>
        </section>
        <section id="contact" className="w-10/12 mx-auto my-32 block md:flex items-end">
          <span className="font-rubik text-gray-900 text-xs md:text-base">© 2021 Fernanda Freitas</span>
          <span className="font-rubik text-gray-900 text-xl font-bold ml-auto">idea.fernanda@gmail.com</span>
        </section>
    </>
  )
}