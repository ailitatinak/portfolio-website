import { Link} from 'react-router-dom';
import React from 'react';
import '../styles/nav-bar.css';

export function ANavBar() {
    return (
        <nav>
            <ul className='navContainer'>
                <li className='navLink'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='navLink'>
                    <Link to='/artportfolio'>Portfolio</Link>
                </li>
                <li className='navLink'>
                    <Link to='/artshop'>Shop</Link>
                </li>
                <li className='navLink'>
                    <Link to='/artabout'>About</Link>
                </li>
            </ul>
        </nav>
    )
}