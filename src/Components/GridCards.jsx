import React from 'react';
import "../assets/Style/GridCards.scss";
import Data from "../Data/data.json";
import Card from './Card';

export default function GridCards() {
  return (
    <div className="projects-grid">
        {Data.map((data, index) => {
            return <Card key={index} data={data} />
        })}
    </div>  
  )
}
