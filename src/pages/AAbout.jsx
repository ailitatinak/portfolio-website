import React from "react"
import { ANavBar } from '../components/ArtNavBar'
import '../styles/a-about.css'
import { AAboutContent } from "../components/AAboutContent"

export function AAboutPage() {
  return (
    <>
      <ANavBar />
      <body className="aboutBody">
        <AAboutContent />
      </body>
    </>
  )
}