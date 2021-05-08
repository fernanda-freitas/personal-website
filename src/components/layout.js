import React from "react"
import "../styles/global.css"
import Header from ".//header"

import Cursor from ".//cursor"

export default function Layout({ children }) {
  return (
    <div>
      <Cursor></Cursor>
      <Header></Header>
      <main>{children}</main>
      {/* Add footer component here */}
    </div>
  )
}