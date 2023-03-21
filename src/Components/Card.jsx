import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../assets/Style/Card.scss";
import { gsap } from "gsap";
export default function Card({ data }) {
  
  useEffect(() => {
    gsap.fromTo(".card", {
      opacity: 0
    }, {
      opacity: 1,
      duration: .5,
      stagger: 0.1
    })
  }, [])

  return (
    <Link to={`/project/${data.id}`} state={{ data }} className="card">
        <img src={data.cover} alt="" />
        <div className="title-box">
            <h3>{data.title}</h3>
            <p>{data.subtitle}</p>
        </div>
    </Link>
  )
}
