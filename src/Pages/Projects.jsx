import React, { useEffect, useRef } from 'react';
import "../assets/Style/Projects.scss";
import GridCards from '../Components/GridCards';
import Navbar from '../Components/Navbar';
import PageTitle from '../Components/PageTitle';
import { gsap } from "gsap";

export default function Projects() {
  const title = {
    firstWord: "Selected",
    secondWord: "works"
  }

  const projects = useRef();
  useEffect(() => {
    gsap.fromTo(projects.current, {
      opacity: 0
    }, {
      opacity: 1,
      duration: 2
    })
  }, [])

  return (
    <div className="projects" ref={projects}>
      <Navbar/>
      <section className="projects-container">
        <PageTitle title={title} />
        <GridCards/>
      </section>
    </div>
  )
}
