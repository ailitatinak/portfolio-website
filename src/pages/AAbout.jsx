import React from "react"
import { ANavBar } from '../components/ArtNavBar'
import { AboutContent } from "../components/AboutContent"

export function AAboutPage() {
  return (
    <>
      <ANavBar />
      <article className="aboutBody">
        <AboutContent />
      </article>
    </>
  )
}