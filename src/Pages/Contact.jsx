import React, { useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar';
import PageTitle from '../Components/PageTitle';
import "../assets/Style/Contact.scss";
import Networks from '../Components/Networks';
import { gsap } from "gsap";
import Form from '../Components/Form';

export default function Contact() {
  const title = {
    firstWord: "Open",
    secondWord: "for work"
  }

  // Gestion de l'animation
  const contact = useRef();
  useEffect(() => {
    gsap.fromTo(contact.current, {
      opacity: 0
    }, {
      opacity: 1,
      duration: 2
    })
  }, [])

  return (
    <div className="contact" ref={contact}>
      <Navbar/>
      <div className="contact-container">
        <PageTitle title={title} />
        <div className="img-box">
          <img src="/contact-hero.jpg" alt="vintage phone" />
        <div className="work-infos">
          <p>I would be happy to work on your project.</p>
          <p>Any questions? Want to talk? Feel free to contact me.</p>
        </div>
          <Networks/>
        </div>
        <div className="content-box"></div>
        <Form/>
      </div>
    </div>
  )
}
