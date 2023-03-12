import React from 'react';
import Navbar from '../Components/Navbar';
import PageTitle from '../Components/PageTitle';
import "../assets/Style/Contact.scss";

export default function Contact() {
  const title = {
    firstWord: "Lets",
    secondWord: "work"
  }
  return (
    <div className="contact">
      <div className="contact-container">
        <Navbar/>
        <PageTitle title={title} />
      </div>
    </div>
  )
}
