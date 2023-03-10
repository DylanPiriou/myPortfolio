import React from 'react'
import "../assets/Style/Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
        <span>@dylanpiriou/</span>
        <nav>
            <a href="#">HOME</a>
            <a href="#">PROJECTS</a>
            <a href="#">CONTACT</a>
        </nav>
    </div>
  )
}
