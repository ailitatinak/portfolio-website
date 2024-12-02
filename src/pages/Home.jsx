import React from "react"
import { NavBar } from '../components/NavBar';
import { BlueEllipse } from '../components/GradientEllipses';

export function HomePage() {
    return (
        <>
            <div className="pageContainer">
                <div className="backLayer">
                    {/* <img className="faceImg" src="/src/assets/face.png" alt="face" /> */}
                    <img className="scribble1" src="/src/assets/bwscribble1.png" alt="scribble-1" />
                    <img className="scribble2" src="/src/assets/bwscribble1.png" alt="scribble-1" />
                    <img className="scribble3" src="/src/assets/bwscribble3.png" alt="scribble-3" />
                    <img className="scribble4" src="/src/assets/bwscribble4.png" alt="scribble-4" />   
                </div>
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