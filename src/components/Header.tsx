
import { useState, useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";
import '../styles/Header.scss'

const Header = () => {

    const ref1: any = useRef(null);
    const ref2: any = useRef(null);
    // const [isVisible, setIsVisible] = useState(false)

    
    

    const handleClick = (e: any) => {
        if(ref1.current.getAttribute('data-nav-visible') === 'false') {
            ref1.current.setAttribute('data-nav-visible', 'true')
            ref2.current.setAttribute('data-button', 'close')
        }

        else {
            ref1.current.setAttribute('data-nav-visible', 'false')
            ref2.current.setAttribute('data-button', 'open')
        }
        // console.log(ref.current.getAttribute('data-nav-visible'));
        // ref.current.setAttribute('data-nav-visible', 'true')
        // console.log(ref.current.getAttribute('data-nav-visible'));
        // // ref.current.attributes["data-nav-visible"] = "true";
    }

  return (
    <>
        <header className='header'>
            <div className='header__logo-wrapper'>
                <img className='header__logo' src='../../src/assets/shared/logo.svg' alt='Logo' />
            </div>
            <button className='navbar__button' ref={ref2} onClick={handleClick} data-button='open'></button>
            <nav className='navbar__main'>
                <ul className='navbar' ref={ref1} data-nav-visible='false'>
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
        <Outlet />
    </>
  )
}

export default Header