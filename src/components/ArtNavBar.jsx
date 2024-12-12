import { Link} from 'react-router-dom'
import React from 'react'
import '../styles/nav_bar.css'

export function ANavBar() {
    return (
        <nav>
            <ul className='navContainer'>
                <div className='left'>
                    <li className='nameHomeLink'>
                        <Link to='/'>Tilia Larson Tioukalias</Link>
                    </li>
                </div>
                <div className='right'>
                    <li className='navLink'>
                        <Link to='/aportfolio'>Portfolio</Link>
                    </li>
                    <li className='navLink'>
                        <Link to='/aportfolio/ashop'>Shop</Link>
                    </li>
                    <li className='navLink'>
                        <Link to='/aportfolio/aabout'>About</Link>
                    </li>
                </div>
            </ul>
        </nav>
    )
}