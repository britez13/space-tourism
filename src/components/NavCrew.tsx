
import { NavLink } from "react-router-dom"


const NavCrew = () => {
  return (
    <nav>
        <ul className='crew-nav'>
            <li className='crew-nav__list'>
                <NavLink className='crew-nav__link' to='/crew/douglas'></NavLink>
            </li>
            <li className='crew-nav__list'>
                <NavLink className='crew-nav__link' to='/crew/mark'></NavLink>
            </li>
            <li className='crew-nav__list'>
                <NavLink className='crew-nav__link' to='/crew/victor'></NavLink>
            </li>
            <li className='crew-nav__list'>
                <NavLink className='crew-nav__link' to='/crew/anousheh'></NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavCrew