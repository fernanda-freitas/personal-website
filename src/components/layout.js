import React from "react"
import "../styles/global.css"
import Header from "./Header"

export default function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      {/* Add footer component here */}
    </>
  )
}