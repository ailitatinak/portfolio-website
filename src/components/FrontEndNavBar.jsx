import { Link} from 'react-router-dom';
import React from 'react';
import '../styles/nav-bar.css';

export function FNavBar() {
    return (
        <nav>
            <ul className='navContainer'>
                <li className='navLink'>
                    <Link to='/fabout/fportfolio'>Portfolio</Link>
                </li>
                <li className='navLink'>
                    <Link to='/fabout'>About</Link>
                </li>
            </ul>
        </nav>
    )
}