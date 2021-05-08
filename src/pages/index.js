import React from "react"
import "tailwindcss/tailwind.css"

// Components
import Layout from "../components/layout"
import Hero from "../components/hero"
import Work from "../components/work"


export default function HomePage() {
  return (
    <Layout>
      <Hero></Hero>
      <Work></Work>
    </Layout>
  )
}