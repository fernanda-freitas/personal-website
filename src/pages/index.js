import React from "react"

// ------- import components -------
import Hero from "../components/hero"
import Work from "../components/work"
import About from "../components/about"


export default function HomePage() {

  return (
    <>
        <Hero />
        <Work />
        <About />
        <section id="contact" className="w-9/12 mx-auto my-32 block md:flex items-end">
          <span className="font-rubik text-gray-700 text-xs md:text-base">© 2021 Fernanda Freitas</span>
          <span className="font-rubik text-gray-700 text-xl font-bold ml-auto">idea.fernanda@gmail.com</span>
        </section>
    </>
  )
}