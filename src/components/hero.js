import React from "react"
// import Particles from 'react-particles-js';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import IconArrowDown from "../assets/svg/IconArrowDown"
import Cursor from ".//Cursor";
import { useContext } from "react";
import { MouseContext } from "../context/mouse-context";

export default function Hero() {
    const { cursorChangeHandler } = useContext(MouseContext);
    return (
        <>
          {/* <Particles
            className="absolute inset-0"
            params={{
              "particles": {
                  "number": {
                      "value": 150,
                      "density": {
                          "enable": true,
                          "value_area": 1000
                      }
                  },
                  "color": {
                    "value": "#9ca3af"
                  },
                  "size": {
                      "value": 0,
                      "random": true,
                      "anim": {
                          "speed": 3,
                          "size_max": 4
                      }
                  },
                  "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#d1d5db",
                    "opacity": 0.4,
                    "width": 2
                  },
                  "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                  }
                },
              "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "repulse"
                    },
                    "resize": true
                },
                "modes": {
                    "bubble": {
                        "distance": 250,
                        "duration": 2,
                        "size": 0,
                        "opacity": 1
                    },
                    "repulse": {
                        "distance": 150,
                        "duration": 4
                    }
                }
              }
          }} /> */}
          <div className="grid grid-cols-12 gap-8 h-screen w-9/12 mx-auto pt-20">
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
