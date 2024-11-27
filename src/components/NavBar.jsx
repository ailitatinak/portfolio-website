import { NavLink} from 'react-router-dom';

export function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/'>Portfolio</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar