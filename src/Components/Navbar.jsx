import React, { useRef, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import "../assets/Style/Navbar.scss";
import { gsap } from 'gsap';

export default function Navbar() {
  // Récupération dynamique du endpoint dans l'URL
  const location = useLocation();
  const param = location.pathname.split('/').pop();

  // Logique du burger menu
  const nav = useRef();
  const burgerMenu = useRef();
  const handleBurgerMenu = () => {
    burgerMenu.current.classList.toggle("active");
    nav.current.classList.toggle("active");
  }

  // Gestion de la navbar en fonction de la hateur de scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScrollNav)
  }, [])

  const handleScrollNav = () => {
    const scrollHeight = window.scrollY;
    console.log(scrollHeight);
    if(scrollHeight >= 200){
      navbar.current.style.background = "#111";
      navbar.current.style.transition = ".3s ease";
    } else{
      navbar.current.style.background = "none";
      navbar.current.style.transition = ".3s ease";
    }
  }

  // Animation
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
    <div className="navbar-container" ref={navbar}>
      <div className="navbar">
        <NavLink to="/" className="home-title">@dylanpiriou/<span className="edited">{param}</span></NavLink>
        <nav ref={nav}>
            <a href="/#about" className="link" data-hover="ABOUT">ABOUT</a>
            <NavLink to="/projects" className="link" data-hover="PROJECTS">PROJECTS</NavLink>
            <NavLink to="/contact" className="link" data-hover="CONTACT">CONTACT</NavLink>
        </nav>
        <div className="burger-menu" ref={burgerMenu} onClick={() => handleBurgerMenu()}>
          <span className="line" id="top"></span>
          <span className="line" id="bottom"></span>
        </div>
      </div>
    </div>
  )
}
