import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import "../assets/Style/Home.scss";
import { getYear } from '../utils/getYear';
import Loader from '../Components/Loader';
import Cursor from '../Components/Cursor';
import HomeTitle from '../Components/HomeTitle';
import About from '../Components/About';
import ScrollIndicator from '../Components/ScrollIndicator';
import { gsap } from "gsap";

export default function Home() {
  // Gestion du loader
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, [])

  // Gestion de l'animation
  useEffect(() => {
    gsap.fromTo(".main-img", {
      opacity: 0
    }, {
      opacity: 1,
      duration: 5
    })
  }, [!isLoading])



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
          <ScrollIndicator/>
        </header>
        <main>
          <About/>
        </main>
    </div>
    )}
    </>
  )
}
