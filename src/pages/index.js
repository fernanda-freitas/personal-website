import React from "react"

// ------- import components -------
import Hero from "../components/hero"
import Work from "../components/work"
// import About from "../components/about"

export default function HomePage() {
  return (
    <>
      <div className="mb-28">
        <Hero />
        <Work />
      </div>
    </>
  )
}
