import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/Style/Card.scss";
export default function Card({ data }) {
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
