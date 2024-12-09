import React from "react"
import { FNavBar } from '../components/FrontEndNavBar'
import { AAboutContent } from "../components/AAboutContent"

//Add contact details
//Make opposite color theme

export function FAboutPage() {
  return (
    <>
      <FNavBar />
      <article className="aboutBody">
        <AAboutContent />
      </article>
    </>
  )
}