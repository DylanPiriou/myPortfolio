import React, { useEffect, useRef } from 'react';
import MainButton from './MainButton';
import "../assets/Style/About.scss";
import { gsap } from "gsap";

export default function About() {
    const about = useRef();

    useEffect(() => {
        gsap.fromTo(about.current, {
            x: -50,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            delay: 1
        })
    }, [])

  return (
    <section className="about-container" id="about" ref={about}>
    <div className="about-content">
        <h2><span className="serif-font">About</span>&nbsp;me</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt non, mollitia laboriosam natus recusandae, tempora quae culpa fuga debitis aperiam ipsum dolores error, deleniti necessitatibus harum repudiandae ratione ab at assumenda tempore. Facilis debitis quo ab inventore quae, illo expedita perferendis laboriosam blanditiis, dolores illum consequatur sequi dolor, tempora maiores.</p>
        <br />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, repellat nobis laudantium pariatur repudiandae dolor veniam tenetur praesentium, consequuntur, dolore earum. Alias natus magni quasi sunt ipsam sapiente accusantium deserunt quis, dignissimos aperiam, rem accusamus repellat. Quisquam, ipsum doloribus soluta ab eligendi corporis. Quo iste quis, delectus itaque illum numquam temporibus quibusdam doloribus voluptas cupiditate, voluptatum obcaecati debitis ex officia nisi! Amet, hic. At velit dolorem incidunt placeat, laudantium ut porro iste? Explicabo accusantium excepturi eum molestias voluptas eius nihil.</p>
        <MainButton/>
    </div>
    </section>
  )
}
