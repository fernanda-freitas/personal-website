import React from "react"
import Link from 'gatsby-link'
import "../styles/global.css"

// Thumbnail Images
import IllustrationThumb from "../assets/images/illustration-cover.jpg"
import InohubThumb from "../assets/images/inohub-thumb.jpg"
import TbThumb from "../assets/images/tb-thumb.png"

export default function Work() {
    return (
        <section id="work" className="w-10/12 mx-auto my-40">
          <div className="grid grid-cols-12 gap-12 mt-20">
            <div className="col-span-12 md:col-span-6">
                <Link className="project-thumb text-gray-600 hover:scale transition duration-300 ease-in-out" to="/">
                  <div className="mb-6 rounded-3xl overflow-hidden" alt="Illustration project">
                    <img className="object-cover w-full h-56 transform transition duration-500 hover:scale-110" src={IllustrationThumb}/>
                  </div>
                    <h3 className="hover-underline inline ml-8 text-xl font-rubik text-gray-700">Illustrations</h3>
                </Link>  
            </div>
            <div className="col-span-12 md:col-span-6">
                <Link className="project-thumb text-gray-600 transition duration-300 ease-in-out" to="/">
                  <div className="mb-6 rounded-3xl overflow-hidden" alt="Illustration project">
                    <img className="object-cover w-full h-56 transform transition duration-500 hover:scale-110" src={InohubThumb}/>
                  </div>
                    <h3 className="hover-underline inline ml-8 text-xl font-rubik text-gray-700">Inohub</h3>
                </Link>  
            </div>
            <div className="col-span-12 md:col-span-6">
                <Link className="project-thumb text-gray-600 transition duration-300 ease-in-out" to="/">
                  <div className="mb-6 rounded-3xl overflow-hidden" alt="Illustration project">
                    <img className="object-cover w-full h-56 transform transition duration-500 hover:scale-110" src={TbThumb}/>
                  </div>
                    <h3 className="hover-underline inline ml-8 text-xl font-rubik text-gray-700">Transparência Brasil</h3>
                </Link>  
            </div>
          </div>
        </section>
    )
};
