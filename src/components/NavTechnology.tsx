
import { NavLink } from "react-router-dom";
import '../styles/NavTechnology.scss'

const NavTechnology = () => {
  return (
    <nav>
        <ul className='technology-nav'>
            {/* <li className='technology-nav__list'>
                <NavLink className='technology-nav__link' to='/technology/launch'>1</NavLink>
            </li> */}
            <NavLink className={({ isActive }) =>
              isActive ? 'technology-nav__link--active'   : 'technology-nav__link'} to='/technology/launch'>
                <span className='technology__number'>1</span>
            </NavLink>

            {/* <li className='technology-nav__list'>
                <NavLink className='technology-nav__link' to='/technology/spacesport'>2</NavLink>
            </li> */}
            <NavLink className={({ isActive }) =>
              isActive ? 'technology-nav__link--active'   : 'technology-nav__link'} to='/technology/spaceport'>
                <span className='technology__number'>2</span>
            </NavLink>

            {/* <li className='technology-nav__list'>
                <NavLink className='technology-nav__link' to='/technology/space'>3</NavLink>
            </li> */}
            <NavLink className={({ isActive }) =>
              isActive ? 'technology-nav__link--active'   : 'technology-nav__link'} to='/technology/space'>
                <span className='technology__number'>3</span>
            </NavLink>

        </ul>
    </nav>
  )
}

export default NavTechnology