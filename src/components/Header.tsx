
import { useState } from "react";
import { NavLink } from "react-router-dom";
import '../styles/Header.scss'

const Header = () => {

    const [isVisible, setIsVisible] = useState(false)

    const handleClick = (e: any) => {
        setIsVisible(!isVisible)  
    }

  return (
    <header className='header'>
        <div className='header__logo-wrapper'>
            <img className="header__logo" src="../../src/assets/shared/logo.svg" alt="Logo" />
        </div>
        <button className={} onClick={handleClick} ></button>
        <nav>
            <ul className={isVisible ? "navbar--visible" : "navbar"}>
                <li className="navbar__list">
                    <NavLink className={({ isActive }) =>
                isActive ? 'navbar__link--active' : 'navbar__link'} to='/'><span>00</span>Home</NavLink>
                </li>
                <li className="navbar__list">
                    <NavLink className={({ isActive }) =>
                isActive ? 'navbar__link--active' : 'navbar__link'} to='/destination/moon'><span>01</span>Destination</NavLink>
                </li>
                <li className="navbar__list">
                    <NavLink className={({ isActive }) =>
                isActive ? 'navbar__link--active' : 'navbar__link'} to='/crew/douglas'><span>02</span>Crew</NavLink>
                </li>
                <li className="navbar__list">
                    <NavLink className={({ isActive }) =>
                isActive ? 'navbar__link--active' : 'navbar__link'} to='/technology/launch'><span>04</span>Technology</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header