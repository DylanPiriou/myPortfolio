import React from 'react';
import { NavLink } from 'react-router-dom';
import "../assets/Style/MainButton.scss";

export default function MainButton() {
  return (
    <button className="main-btn">
        <NavLink to="/contact">
          <span>CONTACT ME</span>
        </NavLink>
    </button>
  )
}
