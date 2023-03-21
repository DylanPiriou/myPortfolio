import React from 'react';
import "../assets/Style/Footer.scss";
import { getYear } from '../utils/getYear';

export default function Footer() {
  return (
    <footer>
        <strong>{getYear()} portfolio.</strong>
        <small className="welcome">Website designed/made by me. All rights reserved.</small>
    </footer>
  )
}
