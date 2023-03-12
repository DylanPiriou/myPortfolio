import React from 'react';
import "../assets/Style/PageTitle.scss";

export default function PageTitle({ title }) {
  return (
    <h2>{title.firstWord}&nbsp;<span className="serif-font">{title.secondWord}</span></h2>
  )
}
