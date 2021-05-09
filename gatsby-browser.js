import React from "react"
import './src/styles/global.css'
import Layout from './src/components/Layout'

export const wrapPageElement = ({ props, element }) => {
  return <Layout {...props}>{element}</Layout>
}