import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import "../assets/Style/Home.scss";
import Loader from '../Components/Loader';
import Cursor from '../Components/Cursor';
import HomeTitle from '../Components/HomeTitle';
import About from '../Components/About';
import ScrollIndicator from '../Components/ScrollIndicator';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from '../Components/Footer';

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
      opacity: 0,
      yPercent: -10
    }, {
      opacity: 1,
      yPercent: 0,
      duration: 2
    })
  }, [!isLoading])

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(".intro", {
      x: 50,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".intro",
        start: "top center"
      }
    })
  }, [!isLoading])



  return (
    <>
    {isLoading ? <Loader/> : (
    <div className="home">
        {/* <Cursor/> */}
        <Navbar/>
        <header>
          {/* <img src="main-hero.jpg" className="main-img" alt="person from the back looking at the horizon" /> */}
          {/* <img src="illustration-dev.svg" className="desktop-mobile" alt="" /> */}
          <img src="abstract.png" className="main-img" alt="" />
          <div className="header-content">
            <HomeTitle/>
          </div>
          <ScrollIndicator/>
        </header>
        <main>
          <div className="intro">
            <p>I'm <span className="serif-font">Dylan</span>, a twenty-three years old front-end <span className="crossed">developer</span> addict, specializing in <span className="serif-font">React.js</span>.</p>
            <img src="logo-dp.svg" className="logo" alt="" />
          </div>
          <About/>
        </main>
        <Footer/>
    </div>
    )}
    </>
  )
}
