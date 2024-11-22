import './App.css'
import { Routes, Route } from 'react-router-dom'
import AboutArt from './AboutArt'
import AboutFrontEnd from './AboutFrontEnd'
import Art from './Art'
import FrontEndDev from './FrontEndDev'
import Home from './Home'
import PortfolioArt from './PortfolioArt'
import PortfolioFrontEnd from './PortfolioFrontEnd'
import Shop from './Shop'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/aboutart' element={<AboutArt />} />
        <Route path='/aboutfrontend' element={<AboutFrontEnd />} />
        <Route path='/art' element={<Art />} />
        <Route path='/frontenddev' element={<FrontEndDev />} />
        <Route path='/portfolioart' element={<PortfolioArt />} />
        <Route path='/portfoliofrontend' element={<PortfolioFrontEnd />}/>
      </Routes>
    </>
  )
}

export default App
