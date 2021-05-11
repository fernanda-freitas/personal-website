import React from "react"

// ------- import project images -------
import Inohub01 from "../assets/images/inohub/inohub01.jpg"
import Inohub02 from "../assets/images/inohub/inohub02.gif"
import Inohub03 from "../assets/images/inohub/inohub03.gif"
import Inohub05 from "../assets/images/inohub/inohub05.jpg"
import Inohub06 from "../assets/images/inohub/inohub06.jpg"
import Inohub07 from "../assets/images/inohub/inohub07.jpg"
import Inohub08 from "../assets/images/inohub/inohub08.jpg"
import Inohub09 from "../assets/images/inohub/inohub09.jpg"
import Inohub10 from "../assets/images/inohub/inohub10.jpg"
import Inohub11 from "../assets/images/inohub/inohub11.jpg"
import Inohub12 from "../assets/images/inohub/inohub12.jpg"
import Inohub13 from "../assets/images/inohub/inohub13.jpg"

export default function InohubPage() {
  return  (
    <>
      <div className="w-10/12 mx-auto mb-28 mt-32">
          <h2 className="text-5xl font-rubik font-bold text-gray-700">Inohub - Branding</h2>
          <h2 className="max-w-5xl mt-3 text-5xl font-rubik leading-tight text-gray-600">Branding project for the National Center for Creative Economy, based in Sao Paulo - Brazil</h2>
          <div className="mt-6">
          <div class="inline bg-purple-100 text-purple-600 antialiased rounded-full text-sm tracking-wide font-semibold px-3 py-1 mr-2">Branding</div>
          <div class="inline bg-purple-100 text-purple-600 antialiased rounded-full text-sm tracking-wide font-semibold px-3 py-1 mr-2">Ux/Ui design</div>
          </div>
      </div>
        <img className="w-full h-172 object-cover" src={Inohub01} alt="Alterar alt" />
        <div className="w-10/12 mx-auto my-40 col-span-12 grid grid-cols-12 gap-8">
          <h1 className="col-span-12 lg:col-span-3 text-4xl font-rubik font-bold text-gray-700">Background</h1>
          <h3 className="col-span-12 lg:col-span-9 text-3xl font-rubik font-light leading-normal text-gray-700">Inohub is a place for dialog and development of new ideas. It represents novelty within the creative economy world, startups and innovative entepreneurs.</h3>
        </div>  
        <img className="w-10/12 mx-auto h-172 object-cover rounded-full" src={Inohub02} alt="Alterar alt" />
        <div className="w-10/12 mx-auto my-40 col-span-12 grid grid-cols-12 gap-8">
          <h1 className="col-span-12 lg:col-span-3 text-4xl font-rubik font-bold text-gray-700">Identity</h1>
          <h3 className="col-span-12 lg:col-span-9 text-3xl font-rubik font-light leading-normal text-gray-700">In order to represent it's four working axes (media, technology, consume and culture), the visual identity aimed to achieve a sense of boldness and agility through a modular system and a direct tone of voice which uses words as visual highlights.</h3>
        </div> 
        <img className="w-10/12 mx-auto h-auto mt-40 rounded-t-2xl object-cover" src={Inohub03} alt="Alterar alt" />
        <img className="w-10/12 mx-auto h-auto mt-20 object-cover" src={Inohub08} alt="Alterar alt" />
        <img className="w-10/12 mx-auto h-auto mt-20 object-cover" src={Inohub09} alt="Alterar alt" />
        <img className="w-10/12 mx-auto h-auto mt-20 object-cover" src={Inohub05} alt="Alterar alt" />
        <img className="w-10/12 mx-auto h-172 mt-20 object-cover" src={Inohub07} alt="Alterar alt" />
        <img className="w-10/12 mx-auto h-auto mt-20 object-cover" src={Inohub06} alt="Alterar alt" />
        <img className="w-10/12 mx-auto h-172 mt-20 object-cover" src={Inohub10} alt="Alterar alt" />
        <div className="w-10/12 mx-auto grid grid-cols-12 mt-20">
          <img className="col-span-12 object-cover" src={Inohub11} alt="Alterar alt" />
          <img className="col-span-12 md:col-span-6 h-96 w-full object-cover" src={Inohub12} alt="Alterar alt" />
          <img className="col-span-12 md:col-span-6 h-96 w-full object-cover" src={Inohub13} alt="Alterar alt" />
        </div>
    </ >
  )
}