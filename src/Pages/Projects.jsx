import React from 'react';
import "../assets/Style/Projects.scss";
import GridCards from '../Components/GridCards';
import Navbar from '../Components/Navbar';

export default function Projects() {
  return (
    <div className="projects">
      <Navbar/>
      <section className="projects-container">
        <h2>Selected works</h2>
        <GridCards/>
      </section>
    </div>
  )
}
