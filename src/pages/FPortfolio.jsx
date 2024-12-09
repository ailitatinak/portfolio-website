import React from "react"
import { FNavBar } from '../components/FrontEndNavBar'
import { ProjectContent } from '../components/FProjectContent'
import '../styles/f-portfolio.css'

//Add new section for every new project

export function FPortfolioPage() {
  return (
    <>
      <FNavBar />
      <div className="projectsContainer">
        <ProjectContent />
        <ProjectContent />
        <ProjectContent />
      </div>
      
    </>
  )
}