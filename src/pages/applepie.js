import React from "react"

// ------- import project images -------
import Applepie01 from "../assets/images/applepie/01.png"
import Applepie02 from "../assets/images/applepie/02.png"

export default function applepie() {
    return (
        <>
          <div className="w-10/12 mx-auto mb-28 mt-32">
            <h2 className="text-5xl font-rubik font-bold text-gray-700">Applepie</h2>
            <h2 className="max-w-5xl mt-3 text-5xl font-rubik leading-tight text-gray-600">Applepie is a marketplace app for buying and selling iPods. It was developed as part of a bootcamp using Rails.</h2>
            <div className="mt-6">
              <div className="flex flex-wrap gap-2">
                <div class="inline bg-purple-100 text-purple-600 antialiased rounded-full text-sm tracking-wide font-semibold px-3 py-1 whitespace-nowrap">Interface design</div>
                <div class="inline bg-purple-100 text-purple-600 antialiased rounded-full text-sm tracking-wide font-semibold px-3 py-1 whitespace-nowrap">Frontend</div>
                <div class="inline bg-purple-100 text-purple-600 antialiased rounded-full text-sm tracking-wide font-semibold px-3 py-1 whitespace-nowrap">Backend</div>
              </div>
            </div>
          </div>
          <img className="w-100 h-auto object-contain mx-auto" src={Applepie01} alt="Artsol ui screen" />
          <img className="w-100 h-auto object-contain mx-auto" src={Applepie02} alt="Artsol ui screen" />
        </ >
    )
};
