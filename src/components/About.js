import React from "react"
import { useContext } from "react";
import { MouseContext } from "../context/mouse-context";
import Cursor from "../components/Cursor";

// ------- import social icons -------
import IconBehance from "../assets/svg/IconBehance.js"
import IconDribbble from "../assets/svg/IconDribbble.js"
import IconInstagram from "../assets/svg/IconInstagram.js"
import IconLinkedin from "../assets/svg/IconLinkedin.js"
import IconSoundcloud from "../assets/svg/IconSoundcloud.js"

export default function About() {
    const { cursorChangeHandler } = useContext(MouseContext);

    return (
        <section id="about" className="bg-gray-100">
            <Cursor />
          <div className="w-9/12 mx-auto py-40 grid grid-cols-12 gap-8">
              <h1 className="col-span-12 lg:col-span-3 text-5xl font-rubik font-bold text-gray-700">About</h1>
              <div className="col-span-12 lg:col-span-8">
                <p className="font-rubik text-lg text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc. Ligula ullamcorper malesuada proin libero nunc. Vitae congue eu consequat ac felis donec et odio pellentesque. Tincidunt lobortis feugiat vivamus at augue. Turpis egestas maecenas pharetra convallis posuere. Integer vitae justo eget magna fermentum iaculis eu non.</p>
                <p className="font-rubik text-lg text-gray-700">Risus viverra adipiscing at in tellus integer feugiat. Egestas egestas fringilla phasellus faucibus scelerisque. Ultricies leo integer malesuada nunc. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
                <div className="mt-12 flex space-x-6">
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
          </div>
        </section>
    )
};
