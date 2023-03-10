import React from 'react'
import { NavLink } from 'react-router-dom';
import "../assets/Style/Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
        <NavLink to="/" className="home-title">@dylan/</NavLink>
        <nav>
            <NavLink to="/projects">PROJECTS</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
        </nav>
    </div>
  )
}
