import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import "../assets/Style/Navbar.scss";

export default function Navbar() {
    const location = useLocation();
    const param = location.pathname.split('/').pop();

  return (
    <div className="navbar">
        <NavLink to="/" className="home-title">@dylanpiriou/<span className="edited">{param}</span></NavLink>
        <nav>
            <a href="#about" className="link" data-hover="ABOUT">ABOUT</a>
            <NavLink to="/projects" className="link" data-hover="PROJECTS">PROJECTS</NavLink>
            <NavLink to="/contact" className="link" data-hover="CONTACT">CONTACT</NavLink>
        </nav>
    </div>
  )
}
