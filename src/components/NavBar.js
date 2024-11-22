import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/art'>Art</NavLink>
                </li>
                <li>
                    <NavLink to='/frontenddev'>Front End Development</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar