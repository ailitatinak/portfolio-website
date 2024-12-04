import './App.css'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { FAboutPage } from './pages/FAbout'
import { APortfolioPage } from './pages/APortfolio'
import './styles/home.css'

function App() {
  return (
    <>
      <Routes>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/fabout' element={<FAboutPage />}></Route>
              <Route path='/aportfolio/' element={<APortfolioPage />}></Route>
      </Routes>
    </>
  )
}

export default App
