import './App.css'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { AboutPage } from './pages/About'
import { PortfolioPage } from './pages/Portfolio'
import './styles/home.css'

function App() {
  return (
    <>
      <Routes>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/about' element={<AboutPage />}></Route>
              <Route path='/portfolio' element={<PortfolioPage />}></Route>
      </Routes>
    </>
  )
}

export default App
