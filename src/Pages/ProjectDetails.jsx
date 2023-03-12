import React from 'react';
import { useParams } from 'react-router-dom';
import Data from "../Data/data.json";
import "../assets/Style/ProjectDetails.scss";
import Navbar from '../Components/Navbar';

export default function ProjectDetails() {
    const { id } = useParams();
    const projectsData = Data.find(project => project.id === +id);

  return (
    <div className="projectDetails">
      <Navbar/>
        <h2>{projectsData.title}</h2>
        <div className="project-container">
          <div className="project-img">
            <img src={projectsData.cover} alt="" />
          </div>
          <div className="project-infos">
            <div className="title-box">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <span>{projectsData.date}.</span>
            </div>
            <div className="tags-box">
              <div className="tag">HTML</div>
              <div className="tag">CSS</div>
              <div className="tag">JS</div>
            </div>
            <ul>
              <li>gggggg</li>
              <li>ggggggggg</li>
              <li>ggggggg</li>
              <li>ggggggg</li>
              <li>gggggggggg</li>
            </ul>
            <p>{projectsData.description}</p>
            <div className="buttons-box">
              <button>Contact me</button>
              <button className="github-btn">Check on GitHub</button>
            </div>
          </div>
        </div>
    </div>
  )
}
