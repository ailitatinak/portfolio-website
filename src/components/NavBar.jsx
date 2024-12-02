import { Link} from 'react-router-dom';
import React from 'react';
import '../styles/nav-bar.css';

export function NavBar() {
    return (
        <nav>
            <ul className='navContainer'>
                <li className='navLink'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='navLink'>
                    <Link to='/about'>About</Link>
                </li>
                <li className='navLink'>
                    <Link to='/portfolio'>Portfolio</Link>
                </li>
            </ul>
        </nav>
    )
}