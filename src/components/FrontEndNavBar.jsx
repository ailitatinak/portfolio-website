import { Link} from 'react-router-dom';
import React from 'react';
import '../styles/nav-bar.css';

export function FNavBar() {
    return (
        <nav>
            <ul className='navContainer'>
                <li className='navLink'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='navLink'>
                    <Link to='/frontenddevelopmentportfolio'>Portfolio</Link>
                </li>
                <li className='navLink'>
                    <Link to='/frontenddevelopmentabout'>About</Link>
                </li>
            </ul>
        </nav>
    )
}