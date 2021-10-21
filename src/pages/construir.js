import React from "react"

// ------- import project images -------
import Construir01 from "../assets/images/construir/01.jpg"

export default function construir() {
    return (
        <>
            <div className="w-10/12 mx-auto mb-28 mt-32">
                <h2 className="text-5xl font-rubik font-bold text-gray-700">Medica</h2>
                <h2 className="max-w-5xl mt-3 text-5xl font-rubik leading-tight text-gray-600">A collaborative app to find doctors, set appointments and give/ receive indications</h2>
                <div className="mt-6">
                <div class="inline bg-purple-100 text-purple-600 antialiased rounded-full text-sm tracking-wide font-semibold px-3 py-1 mr-2">Personal</div>
                <div class="inline bg-purple-100 text-purple-600 antialiased rounded-full text-sm tracking-wide font-semibold px-3 py-1 mr-2">Research</div>
                <div class="inline bg-purple-100 text-purple-600 antialiased rounded-full text-sm tracking-wide font-semibold px-3 py-1 mr-2">Ux/Ui design</div>
                </div>
            </div>
            <img className="w-10/12 h-auto object-contain mx-auto" src={Construir01} alt="Alterar alt" />
        </ >
    )
};
