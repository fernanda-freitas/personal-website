import React from "react"
import Link from 'gatsby-link'
import "../styles/global.css"
import { useContext } from "react";
import { MouseContext } from "../context/mouse-context";

// ------- import thumbnail images -------
import IllustrationThumb from "../assets/images/illustration/illustration-thumb.png"
import InohubThumb from "../assets/images/inohub/inohub-thumb.jpg"
import TbThumb from "../assets/images/tb-thumb.png"
import MedicaThumb from "../assets/images/medica/01.gif"
import ConstruirThumb from "../assets/images/construir/02.jpg"
import ArtsolThumb from "../assets/images/artsol/02.png"
import DribbbleThumb from "../assets/images/dribbble/01.png"

export default function Work() {
  const { cursorChangeHandler } = useContext(MouseContext);

    return (
        <section id="work" className="grid grid-cols-12 gap-8 min-h-172 w-10/12 mx-auto pt-20">
            <div className="col-span-12 md:col-span-6"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}>
              <Link className="project-thumb text-gray-700 transition duration-300 ease-in-out" to="/construir/">
                <div className="mb-6 rounded-3xl overflow-hidden" alt="Illustration project">
                  <img className="object-cover object-top w-full h-40 md:h-60 transform transition duration-500 hover:scale-110" src={ConstruirThumb} alt="Alterar alt"/>
                </div>
                  <h3 className="inline ml-8 text-xl font-rubik text-gray-700">Construir</h3>
              </Link>
            </div>
            <div className="col-span-12 md:col-span-6"
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}>
                <Link className="project-thumb text-gray-700 transition duration-300 ease-in-out" to="/artsol/">
                  <div className="mb-6 rounded-3xl overflow-hidden" alt="Illustration project">
                    <img className="object-cover object-top w-full h-40 md:h-60 transform transition duration-500 hover:scale-110" src={ArtsolThumb} alt="Alterar alt"/>
                  </div>
                    <h3 className="inline ml-8 text-xl font-rubik text-gray-700">Artsol</h3>
                </Link>
            </div>
            <div className="col-span-12 md:col-span-6"
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}>
                <Link className="project-thumb text-gray-700 transition duration-300 ease-in-out" to="/transparencia/">
                  <div className="mb-6 rounded-3xl overflow-hidden" alt="Illustration project">
                    <img className="object-cover w-full h-40 md:h-60 transform transition duration-500 hover:scale-110" src={TbThumb} alt="Alterar alt"/>
                  </div>
                    <h3 className="inline ml-8 text-xl font-rubik text-gray-700">Transparência Brasil</h3>
                </Link>
            </div>
            <div className="col-span-12 md:col-span-6"
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}>
                <Link className="project-thumb text-gray-700 transition duration-300 ease-in-out" to="/medica/">
                  <div className="mb-6 rounded-3xl overflow-hidden" alt="Illustration project">
                    <img className="object-cover w-full h-40 md:h-60 transform transition duration-500 hover:scale-110" src={MedicaThumb} alt="Alterar alt"/>
                  </div>
                    <h3 className="inline ml-8 text-xl font-rubik text-gray-700">Medica</h3>
                </Link>
            </div>
            <div className="col-span-12 md:col-span-6"
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}>
                <Link className="project-thumb text-gray-700 hover:scale transition duration-300 ease-in-out" to="/illustration/">
                  <div className="mb-6 rounded-3xl overflow-hidden" alt="Illustration project">
                    <img className="object-cover w-full h-40 md:h-60 transform transition duration-500 hover:scale-110" src={IllustrationThumb} alt="Alterar alt"/>
                  </div>
                    <h3 className="inline ml-8 text-xl font-rubik text-gray-700">Illustrations</h3>
                </Link>
            </div>
            <div className="col-span-12 md:col-span-6"
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}>
                <Link className="project-thumb text-gray-700 transition duration-300 ease-in-out" to="/inohub/">
                  <div className="mb-6 rounded-3xl overflow-hidden" alt="Illustration project">
                    <img className="object-cover w-full h-40 md:h-60 transform transition duration-500 hover:scale-110" src={InohubThumb} alt="Alterar alt"/>
                  </div>
                    <h3 className="inline ml-8 text-xl font-rubik text-gray-700">Inohub</h3>
                </Link>
            </div>
            <div className="col-span-12 md:col-span-6"
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}>
                <a href="https://dribbble.com/fernanda_freitas" target="_blank" className="project-thumb text-gray-700 transition duration-300 ease-in-out">
                  <div className="mb-6 rounded-3xl overflow-hidden" alt="Illustration project">
                    <img className="object-cover w-full h-40 md:h-60 transform transition duration-500 hover:scale-110" src={DribbbleThumb} alt="Alterar alt"/>
                  </div>
                    <h3 className="inline ml-8 text-xl font-rubik text-gray-700">Dribbble Shots</h3>
                </a>
            </div>
        </section>
    )
};
