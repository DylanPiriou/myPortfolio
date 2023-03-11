import React from 'react';
import Navbar from '../Components/Navbar';
import "../assets/Style/Home.scss";
import { getYear } from '../utils/getYear';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
        <Navbar/>
        <header>
          <img src="main-hero.jpg" className="main-img" alt="person from the back looking at the horizon" />
          <div className="header-content">
            <h1>
                <span>Hello,</span>
                <br />
                <span>Im a FrontEnd</span>
                <br />
                <span>Developer</span>
            </h1>
            <p>Welcome to my {getYear()} portfolio.</p>
          </div>
          <div className="scroll-info">
            <img src="arrow.svg" className="arrow-icon" alt="" />
            <p>SCROLL TO BEGIN YOUR JOURNEY</p>
          </div>
        </header>
        <main>
          <section className="about-container" id="about">
            <div className="about-content">
              <h2>About me</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt non, mollitia laboriosam natus recusandae, tempora quae culpa fuga debitis aperiam ipsum dolores error, deleniti necessitatibus harum repudiandae ratione ab at assumenda tempore. Facilis debitis quo ab inventore quae, illo expedita perferendis laboriosam blanditiis, dolores illum consequatur sequi dolor, tempora maiores.</p>
              <br />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, repellat nobis laudantium pariatur repudiandae dolor veniam tenetur praesentium, consequuntur, dolore earum. Alias natus magni quasi sunt ipsam sapiente accusantium deserunt quis, dignissimos aperiam, rem accusamus repellat. Quisquam, ipsum doloribus soluta ab eligendi corporis. Quo iste quis, delectus itaque illum numquam temporibus quibusdam doloribus voluptas cupiditate, voluptatum obcaecati debitis ex officia nisi! Amet, hic. At velit dolorem incidunt placeat, laudantium ut porro iste? Explicabo accusantium excepturi eum molestias voluptas eius nihil.</p>
              <button className="contact-button"><NavLink to="/contact">Contact me</NavLink></button>
            </div>
          </section>
        </main>
    </div>
  )
}
