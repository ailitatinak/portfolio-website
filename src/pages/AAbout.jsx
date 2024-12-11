import React from "react"
import { ANavBar } from '../components/ArtNavBar'
import { AboutContent } from "../components/AboutContent"

//Add contact details
//Make opposite color theme

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