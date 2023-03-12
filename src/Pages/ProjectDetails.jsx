import React from 'react';
import { useParams } from 'react-router-dom';
import Data from "../Data/data.json";

export default function ProjectDetails() {
    const { title } = useParams();
    const projectsData = Data.find(project => project.title === title);
  return (
    <div className="projectDetails">
        <h1>{projectsData.title}</h1>
        <img src={projectsData.cover} alt="" />
    </div>
  )
}
