import React from "react"
import "tailwindcss/tailwind.css"
import Particles from 'react-particles-js';
import Cursor from ".//cursor"

export default function Hero() {
    return (
        <div>
          <Cursor></Cursor>
          <div className="grid grid-cols-12 absolute inset-0 w-10/12 mx-auto pt-40 md:pt-60">
            <div className="col-span-12 md:col-span-3">
              <h1 className="text-6xl font-rubik font-bold text-gray-700 uppercase">Hello,</h1>
            </div>
            <div className="col-span-12 md:col-span-9 pt-20 md:pt-0">
              <h3 className="text-4xl font-rubik font-light leading-normal text-gray-700">I’m a <span className="font-semibold">UI/UX Designer</span> who creates <span className="font-semibold">digital interfaces</span>, <span className="font-semibold">prototypes</span> and <span className="font-semibold">front-ends it</span>. Apart from that I love to illustrate and create beautiful visual concepts.</h3>
            </div>
          </div>
          <Particles
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
          }} />
      </div>
    )
};
