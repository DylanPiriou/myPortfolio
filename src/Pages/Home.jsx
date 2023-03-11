import React from 'react';
import Navbar from '../Components/Navbar';
import "../assets/Style/Home.scss";

export default function Home() {
  return (
    <div className="home">
        <Navbar/>
        <img src="main-hero.jpg" className="main-img" alt="person from the back looking at the horizon" />
        <h1>
            <span>Hello,</span>
            <br />
            <span>Im a FrontEnd</span>
            <br />
            <span>Developer</span>
        </h1>
    </div>
  )
}
