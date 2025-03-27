import React from "react"
import { NavBar } from '../components/HomeNavBar'

export function HomePage() {
    return (
        <>
            <div className="pageContainer">
            <NavBar />
                <div className="pContainer">
                    <p className="hi">Hi there!</p>
                    <p>I'm a front end developer and artist. <br />How can I help?</p>
                </div>
                <img className="faceImg" src="/src/assets/home_img.png" alt="face" />
                <h1 className="headerContent">
                    <div className="tilia">Tilia</div>
                    <div className="larson">Larson</div>
                    <div className="tioukalias">Tioukalias</div>
                </h1>
            </div>
        </>
    )
}