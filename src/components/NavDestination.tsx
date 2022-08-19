import { NavLink } from "react-router-dom";
import '../styles/NavDestination.scss'

const NavDestination = () => {
   return (
   <nav>
        <ul className='destination-nav'>
            <li className='destination-nav__list'>
                <NavLink 
                className={({ isActive }) =>
              isActive ? 'destination-nav__link--active' : 'destination-nav__link'}  to='/destination/moon'>Moon</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) =>
              isActive ? 'destination-nav__link--active' : 'destination-nav__link'}  to='/destination/mars'>Mars</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) =>
              isActive ? 'destination-nav__link--active' : 'destination-nav__link'}  to='/destination/europa'>Europa</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) =>
              isActive ? 'destination-nav__link--active' : 'destination-nav__link'} to='/destination/titan'>Titan</NavLink>
            </li>
        </ul>
    </nav>)
}

export default NavDestination