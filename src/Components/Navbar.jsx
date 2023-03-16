import React, { useRef, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import "../assets/Style/Navbar.scss";
import { gsap } from 'gsap';

export default function Navbar() {
    const location = useLocation();
    const param = location.pathname.split('/').pop();

    // Logique du burger menu
    const nav = useRef();
    const burgerMenu = useRef();
    const handleBurgerMenu = () => {
      burgerMenu.current.classList.toggle("active");
      nav.current.classList.toggle("active");
    }

    const navbar = useRef();
    useEffect(() => {
      gsap.fromTo(navbar.current, {
        opacity: 0
      }, {
        opacity: 1,
        duration: 1,
        delay: 1
      })
    }, [])
    

  return (
    <div className="navbar" ref={navbar}>
        <NavLink to="/" className="home-title">@dylanpiriou/<span className="edited">{param}</span></NavLink>
        <nav ref={nav}>
            <a href="#about" className="link" data-hover="ABOUT">ABOUT</a>
            <NavLink to="/projects" className="link" data-hover="PROJECTS">PROJECTS</NavLink>
            <NavLink to="/contact" className="link" data-hover="CONTACT">CONTACT</NavLink>
        </nav>
        <div className="burger-menu" ref={burgerMenu} onClick={() => handleBurgerMenu()}>
          <span className="line" id="top"></span>
          <span className="line" id="bottom"></span>
        </div>
    </div>
  )
}
