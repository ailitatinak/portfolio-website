import { Link} from 'react-router-dom';
import React from 'react';
import '../styles/nav-bar.css';

export function ANavBar() {
    return (
        <nav>
            <ul className='navContainer'>
                <li className='navLink'>
                    <Link to='/aportfolio'>Portfolio</Link>
                </li>
                <li className='navLink'>
                    <Link to='/aportfolio/ashop'>Shop</Link>
                </li>
                <li className='navLink'>
                    <Link to='/aportfolio/aabout'>About</Link>
                </li>
            </ul>
        </nav>
    )
}