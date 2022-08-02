import React from "react"

// ------- import project images -------
import artsol01 from "../assets/images/artsol/01.png"
import artsol02 from "../assets/images/artsol/02.png"
import artsol03 from "../assets/images/artsol/03.png"

export default function artsol() {
    return (
        <>
          <div className="w-10/12 mx-auto mb-28 mt-32">
            <h2 className="text-5xl font-rubik font-bold text-gray-700">Artsol</h2>
            <h2 className="max-w-5xl mt-3 text-5xl font-rubik leading-tight text-gray-600">Frontend development and some part of the Ui for Artsol, a non profit Brazilian organization dedicated to extra curricular child care.</h2>
            <div className="mt-6">
              <div className="flex flex-wrap gap-2">
                <div class="inline bg-purple-100 text-purple-600 antialiased rounded-full text-sm tracking-wide font-semibold px-3 py-1 whitespace-nowrap">Front-end</div>
                <div class="inline bg-purple-100 text-purple-600 antialiased rounded-full text-sm tracking-wide font-semibold px-3 py-1 whitespace-nowrap">Angular</div>
                <div class="inline bg-purple-100 text-purple-600 antialiased rounded-full text-sm tracking-wide font-semibold px-3 py-1 whitespace-nowrap">Interface design</div>
              </div>
            </div>
          </div>
          <img className="w-100 h-auto object-contain mx-auto" src={artsol01} alt="Artsol ui screen" />
          <img className="w-100 h-auto object-contain mx-auto" src={artsol02} alt="Artsol ui screen" />
          <img className="w-100 h-auto object-contain mx-auto" src={artsol03} alt="Artsol ui screen" />
        </ >
    )
};
