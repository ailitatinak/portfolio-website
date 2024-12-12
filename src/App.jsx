import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { FAboutPage } from './pages/FAbout'
import { AAboutPage } from './pages/AAbout'
import { AShopPage } from './pages/AShop'
import { FPortfolioPage } from './pages/FPortfolio'
import { APortfolioPage } from './pages/APortfolio'
import './styles/home.css'

function App() {
  return (
    <>
      <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />}></Route>
                <Route path='/fabout' element={<FAboutPage />}></Route>
                <Route path='/fabout/fportfolio' element={<FPortfolioPage />}></Route>
                <Route path='/aportfolio/' element={<APortfolioPage />}></Route>
                <Route path='/aportfolio/ashop' element={<AShopPage />}></Route>
                <Route path='/aportfolio/aabout' element={<AAboutPage />}></Route>
              </Route>
      </Routes>
    </>
  )
}

function Layout() {
  return (
    <>
      <Outlet />
    </>
  )
}

export default App
