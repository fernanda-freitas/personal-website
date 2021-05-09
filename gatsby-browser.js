import React from "react"
import './src/styles/global.css'
import Layout from './src/components/Layout'
import MouseContextProvider from "./src/context/mouse-context";

export const wrapPageElement = ({ props, element }) => {
  return (
    <MouseContextProvider>
        <Layout {...props}>{element}</Layout>
    </MouseContextProvider>
  )

}