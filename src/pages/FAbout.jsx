import React from "react"
import { FNavBar } from '../components/FrontEndNavBar'
import { AboutContent } from "../components/AboutContent"

//Add contact details
//Make opposite color theme

export function FAboutPage() {
  return (
    <>
      <FNavBar />
      <article className="aboutBody">
        <AboutContent />
      </article>
    </>
  )
}