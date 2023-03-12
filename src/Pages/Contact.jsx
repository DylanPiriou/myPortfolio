import React from 'react';
import Navbar from '../Components/Navbar';
import PageTitle from '../Components/PageTitle';
import "../assets/Style/Contact.scss";
import Networks from '../Components/Networks';

export default function Contact() {
  const title = {
    firstWord: "Lets",
    secondWord: "work"
  }
  return (
    <div className="contact">
        <Navbar/>
      <div className="contact-container">
        <PageTitle title={title} />
        <img src="/contact-hero.jpg" alt="image of a vintage phone" />
        <Networks/>
      </div>
    </div>
  )
}
