import './App.css'
import { Routes, Route } from 'react-router-dom'
// import AboutArt from './src/pages/AboutArt'
// import AboutFrontEnd from './src/pages/AboutFrontEnd'
// import Art from './src/pages/Art'
// import FrontEndDev from './src/pages/FrontEndDev'
import Home from './pages/Home'
// import PortfolioArt from './src/pages/PortfolioArt'
// import PortfolioFrontEnd from './src/pages/PortfolioFrontEnd'
// import Shop from './src/pages/Shop'

function App() {
  return (
    <>
      <h1>Hej</h1>
      <Home />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/shop' element={<Shop />} />
        <Route path='/aboutart' element={<AboutArt />} />
        <Route path='/aboutfrontend' element={<AboutFrontEnd />} />
        <Route path='/art' element={<Art />} />
        <Route path='/frontenddev' element={<FrontEndDev />} />
        <Route path='/portfolioart' element={<PortfolioArt />} />
        <Route path='/portfoliofrontend' element={<PortfolioFrontEnd />}/> }
      </Routes> */}
    </>
  )
}

export default App
