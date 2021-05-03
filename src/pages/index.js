import React from "react"
import Layout from "../components/layout"
import Link from 'gatsby-link'
import "tailwindcss/tailwind.css"


export default function HomePage() {
  return (
    <Layout>
      <Link to="/about/">Link to About</Link>
      <div className=" text-blue-500">Lorem</div>
    </Layout>
  )
}