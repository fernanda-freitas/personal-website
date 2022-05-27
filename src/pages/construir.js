import React from "react"

// ------- import project images -------
import Construir01 from "../assets/images/construir/01.jpg"
import Construir02 from "../assets/images/construir/02.jpg"
import Construir03 from "../assets/images/construir/03.jpg"

export default function construir() {
    return (
        <>
          <div className="w-10/12 mx-auto mb-28 mt-32">
            <h2 className="text-5xl font-rubik font-bold text-gray-700">Construir</h2>
            <h2 className="max-w-5xl mt-3 text-5xl font-rubik leading-tight text-gray-600">Design rebranding, interface design and front-end development for Workmedia, a real estate news company</h2>
            <div className="mt-6">
              <div className="flex flex-wrap gap-2">
                <div class="inline bg-purple-100 text-purple-600 antialiased rounded-full text-sm tracking-wide font-semibold px-3 py-1 whitespace-nowrap">Refactor</div>
                <div class="inline bg-purple-100 text-purple-600 antialiased rounded-full text-sm tracking-wide font-semibold px-3 py-1 whitespace-nowrap">Interface design</div>
                <div class="inline bg-purple-100 text-purple-600 antialiased rounded-full text-sm tracking-wide font-semibold px-3 py-1 whitespace-nowrap">Front-end</div>
                <div class="inline bg-purple-100 text-purple-600 antialiased rounded-full text-sm tracking-wide font-semibold px-3 py-1 whitespace-nowrap">React</div>
              </div>
            </div>
          </div>
          <img className="w-100 h-auto object-contain mx-auto" src={Construir01} alt="Alterar alt" />
          <img className="w-100 h-auto object-contain mx-auto" src={Construir02} alt="Alterar alt" />
          <img className="w-100 h-auto object-contain mx-auto" src={Construir03} alt="Alterar alt" />
        </ >
    )
};
