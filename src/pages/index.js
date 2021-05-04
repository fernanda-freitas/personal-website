import React from "react"
import Layout from "../components/layout"
import "tailwindcss/tailwind.css"
import Particles from 'react-particles-js';


export default function HomePage() {
  return (
    <Layout>
      <div style={{backgroundColor: "#F9FAFB"}}>
      <Particles
          params={{
            "particles": {
                "number": {
                    "value": 150,
                    "density": {
                        "enable": true
                    }
                },
                "size": {
                    "value": 4,
                    "random": true,
                    "anim": {
                        "speed": 0,
                        "size_min": 0.3
                    }
                },
                "color": {
                  "value": "#374151"
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "random": true,
                    "speed": 2,
                    "out_mode": "in"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    }
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
    </Layout>
  )
}

