import { Link} from 'react-router-dom';
import React from 'react';
import '../styles/nav-bar.css';

export function NavBar() {
    return (
        <nav>
            <ul className='navContainer'>
                <li className='navLink'>
                    <Link to='/fabout'>Front End Dev.</Link>
                </li>
                <li className='navLink'>
                    <Link to='/aportfolio'>Art</Link>
                </li>
            </ul>
        </nav>
    )
}