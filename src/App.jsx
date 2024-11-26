import './App.css'
import { Outlet, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { AboutPage } from './pages/About';
import { PortfolioPage } from './pages/Portfolio';

function App() {
  return (
    <>
      <h1>Hej</h1>
      <Home />
    </>
  )
}

export default App
