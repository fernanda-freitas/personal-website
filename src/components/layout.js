import React from "react"
import "../styles/global.css"
import Header from "./Header"
import Cursor from "./Cursor"

export default function Layout({ children }) {
  return (
    <>
      <Cursor></Cursor>
      <Header></Header>
      <main>{children}</main>
      {/* Add footer component here */}
    </>
  )
}