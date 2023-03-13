import React from 'react';
import Navbar from '../Components/Navbar';
import PageTitle from '../Components/PageTitle';
import "../assets/Style/Contact.scss";
import Networks from '../Components/Networks';

export default function Contact() {
  const title = {
    firstWord: "Open",
    secondWord: "for work"
  }
  return (
    <div className="contact">
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
      </div>
    </div>
  )
}
