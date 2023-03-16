import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import "../assets/Style/Home.scss";
import { getYear } from '../utils/getYear';
import Loader from '../Components/Loader';
import Cursor from '../Components/Cursor';
import HomeTitle from '../Components/HomeTitle';
import About from '../Components/About';

export default function Home() {
  // Gestion du loader
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, [])

  return (
    <>
    {isLoading ? <Loader/> : (
    <div className="home">
        {/* <Cursor/> */}
        <Navbar/>
        <header>
          <img src="main-hero.jpg" className="main-img" alt="person from the back looking at the horizon" />
          <div className="header-content">
            <HomeTitle/>
            <p>Welcome to my {getYear()} portfolio.</p>
          </div>
          <div className="scroll-info">
            <img src="arrow.svg" className="arrow-icon" alt="" />
            <p>SCROLL TO DISCOVER ME</p>
          </div>
        </header>
        <main>
          <About/>
        </main>
    </div>
    )}
    </>
  )
}
