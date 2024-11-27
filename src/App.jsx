import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { AboutPage } from './pages/About'
import { PortfolioPage } from './pages/Portfolio'
import { NavBar } from './components/NavBar';
import './styles/home.css'

function App() {
  return (
    <>
    <h1>Hello world</h1>
      <Router>
        <div>
          <NavBar />
          <div>
            <Switch>
              <Route path=''>
                <HomePage />
              </Route>
              <Route path=''>
                <AboutPage />
              </Route>
              <Route path=''>
                <PortfolioPage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
