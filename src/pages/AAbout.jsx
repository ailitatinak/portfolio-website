import React from "react"
import { ANavBar } from '../components/ArtNavBar'
import '../styles/a-about.css'
import { AAboutContent } from "../components/AAboutContent"

//Add contact details
//Make opposite color theme

export function AAboutPage() {
  return (
    <>
      <ANavBar />
      <article className="aboutBody">
        <AAboutContent />
      </article>
    </>
  )
}