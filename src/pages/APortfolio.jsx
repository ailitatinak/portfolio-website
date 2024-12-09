import React from "react"
import { ANavBar } from '../components/ArtNavBar'
import { PortfolioCard } from '../components/APortfolioContent';
import '../styles/a-portfolio.css'

//One card for every item in json

export function APortfolioPage() {
  return (
    <>
      <ANavBar />
      <div className="body">
        <div className="cardsContainer">
          <div className="scrollGallery">
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
          </div>
        </div>
      </div>
    </>
  )
}