import React from "react"
import { NavBar } from '../components/HomeNavBar';

export function HomePage() {
    return (
        <>
            <div className="pageContainer">
                <div className="frontLayer">
                    <div className="faceContainer">
                        <div className="faceBg">
                            <img className="faceImg" src="/src/assets/head-without-body.png" alt="face" />
                        </div>
                    </div>
                    <div className="headerContainer">
                        <h1 className="nameHeader">Tilia Larson Tioukalias</h1>
                        <NavBar />
                    </div>
                </div>
            </div>
        </>
    )
}