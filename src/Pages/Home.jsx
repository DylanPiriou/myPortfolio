import React from 'react';
import Navbar from '../Components/Navbar';
import "../assets/Style/Home.scss";
import { getYear } from '../utils/getYear';

export default function Home() {
  return (
    <div className="home">
        <Navbar/>
        <header>
          <img src="main-hero.jpg" className="main-img" alt="person from the back looking at the horizon" />
          <div className="header-content">
            <h1>
                <span>Hello,</span>
                <br />
                <span>Im a FrontEnd</span>
                <br />
                <span>Developer</span>
            </h1>
            <p>Welcome to my {getYear()} portfolio.</p>
          </div>
          <div className="scroll-info">
            <img src="arrow.svg" className="arrow-icon" alt="" />
            <p>SCROLL TO BEGIN YOUR JOURNEY</p>
          </div>
        </header>
    </div>
  )
}
