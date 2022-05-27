import React from "react"

// ------- import project images -------
import Illustration00 from "../assets/images/illustration/illustration00.jpg"
import Illustration01 from "../assets/images/illustration/illustration01.gif"
import Illustration02 from "../assets/images/illustration/illustration02.jpg"
import Illustration04 from "../assets/images/illustration/illustration04.jpg"
import Illustration05 from "../assets/images/illustration/illustration05.jpg"
import Illustration06 from "../assets/images/illustration/illustration06.jpg"
import Illustration07 from "../assets/images/illustration/illustration07.jpg"
import Illustration08 from "../assets/images/illustration/illustration08.jpg"
import Illustration09 from "../assets/images/illustration/illustration09.jpg"
import Illustration10 from "../assets/images/illustration/illustration10.jpg"
import Illustration11 from "../assets/images/illustration/illustration11.jpg"
import Illustration12 from "../assets/images/illustration/illustration12.jpg"
import Illustration13 from "../assets/images/illustration/illustration13.jpg"
import Illustration15 from "../assets/images/illustration/illustration015.jpg"

export default function illustration() {
    return (
        <>
            <div className="w-10/12 mx-auto mb-28 mt-32">
                <h2 className="text-5xl font-rubik font-bold text-gray-700">Illustration</h2>
            </div>
            <img className="w-full h-172 object-cover" src={Illustration00} alt="Alterar alt" />

            <div className="grid grid-cols-12 p-6 md:p-16 pb-0 gap-8">
                <img className="col-span-12 md:col-span-4 object-contain" src={Illustration02} alt="Illustration" />
                <img className="col-span-12 md:col-span-4 object-contain" src={Illustration01} alt="Illustration" />
                <img className="col-span-12 md:col-span-4 object-contain" src={Illustration08} alt="Illustration" />
                <div className="grid grid-cols-12 grid-rows-2 col-span-12 gap-8">
                    <img className="col-span-12 md:col-span-8 md:row-span-2" src={Illustration06} alt="Illustration" />
                    <img className="col-span-12 md:col-span-4 md:row-span-1" src={Illustration05} alt="Illustration" />
                    <img className="col-span-12 md:col-span-4 md:row-span-1" src={Illustration12} alt="Illustration" />
                </div>
                <img className="col-span-12 md:col-span-4" src={Illustration09} alt="Illustration" />
                <img className="col-span-12 md:col-span-4" src={Illustration04} alt="Illustration" />
                <img className="col-span-12 md:col-span-4" src={Illustration07} alt="Illustration" />
                <img className="col-span-12 md:col-span-4" src={Illustration11} alt="Illustration" />
                <img className="col-span-12 md:col-span-4" src={Illustration10} alt="Illustration" />
                <img className="col-span-12 md:col-span-4 w-full object-cover" src={Illustration13} alt="Illustration" />
                <img className="col-span-12" src={Illustration15} alt="Illustration" />
            </div>
        </ >
    )
};
