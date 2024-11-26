export function HomePage() {
    return (
        <>
            <div className="pageContainer">
                <h1 className="nameHeader">Tilia Larson Tioukalias</h1>
                {/* <img className="faceImg" src="/src/assets/face.png" alt="face" /> */}
                <img className="scribble1" src="/src/assets/bwscribble1.png" alt="scribble-1" />
                <img className="scribble2" src="/src/assets/bwscribble1.png" alt="scribble-1" />
                <img className="scribble3" src="/src/assets/bwscribble3.png" alt="scribble-3" />
                <img className="scribble4" src="/src/assets/bwscribble4.png" alt="scribble-4" />
                <nav className="navBar">
                    <p>About me</p>
                    <p>Portfolio</p>
                </nav>
            </div>
        </>
    )
}