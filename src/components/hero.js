import React from "react"
import "tailwindcss/tailwind.css"
import Particles from 'react-particles-js';

export default function Hero() {
    return (
        <div>
        <div className="absolute inset-0 max-w-7xl mx-auto pt-40">
          <h1 className="text-5xl font-rubik font-bold text-gray-700 uppercase">Hello,</h1>
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
                      "value": 4,
                      "random": true,
                      "anim": {
                          "speed": 3,
                          "size_max": 4
                      }
                  },
                  "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#d1d5db",
                    "opacity": 0.4,
                    "width": 2
                  },
                  "move": {
                    "enable": true,
                    "speed": 2,
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
