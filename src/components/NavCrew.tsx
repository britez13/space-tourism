
import { NavLink } from "react-router-dom"
import '../styles/NavCrew.scss'

const NavCrew = () => {
  return (
    <nav>
        <ul className='crew-nav'>
            
                <NavLink className={({ isActive }) =>
              isActive ? 'crew-nav__link--active'   : 'crew-nav__link'} to='/crew/douglas'></NavLink>
            
            
                <NavLink className={({ isActive }) =>
              isActive ? 'crew-nav__link--active'   : 'crew-nav__link'} to='/crew/mark'></NavLink>
           
                <NavLink className={({ isActive }) =>
              isActive ? 'crew-nav__link--active'   : 'crew-nav__link'} to='/crew/victor'></NavLink>
            
            
                <NavLink className={({ isActive }) =>
              isActive ? 'crew-nav__link--active'   : 'crew-nav__link'} to='/crew/anousheh'></NavLink>
            
        </ul>
    </nav>
  )
}

export default NavCrew