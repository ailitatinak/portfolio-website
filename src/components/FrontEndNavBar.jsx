import { Link} from 'react-router-dom'
import React from 'react'
import '../styles/nav_bar.css'

export function FNavBar() {
    return (
        <nav>
            <ul className='navContainer'>
                <div className='left'>
                    <li className='nameHomeLink'>
                        <Link to= '/'>Tilia Larson Tioukalias</Link>
                    </li>
                </div>
                <div className='right'>
                    <li className='navLink'>
                        <Link to='/fabout/fportfolio'>Portfolio</Link>
                    </li>
                    <li className='navLink'>
                        <Link to='/fabout'>About</Link>
                    </li>
                </div>
            </ul>
        </nav>
    )
}