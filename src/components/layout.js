import React from "react"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div>
      {/* Add header component here */}
      <main>{children}</main>
      {/* Add footer component here */}
    </div>
  )
}