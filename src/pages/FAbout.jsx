import React from "react"
import { FNavBar } from '../components/FrontEndNavBar'
import { AAboutContent } from "../components/AAboutContent"

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