import React from "react"
import "../styles/global.css"
import Header from ".//header"

export default function Layout({ children }) {
  return (
    <div>
      <Header></Header>
      <main>{children}</main>
      {/* Add footer component here */}
    </div>
  )
}