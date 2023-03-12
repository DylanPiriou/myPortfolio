import React from 'react';
import "../assets/Style/Projects.scss";
import GridCards from '../Components/GridCards';
import Navbar from '../Components/Navbar';
import PageTitle from '../Components/PageTitle';

export default function Projects() {
  const title = {
    firstWord: "Selected",
    secondWord: "works"
  }

  return (
    <div className="projects">
      <Navbar/>
      <section className="projects-container">
        <PageTitle title={title} />
        <GridCards/>
      </section>
    </div>
  )
}
