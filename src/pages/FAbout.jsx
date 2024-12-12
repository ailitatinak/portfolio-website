import React from "react"
import { FNavBar } from '../components/FrontEndNavBar'
import { AboutContent } from "../components/AboutContent"

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