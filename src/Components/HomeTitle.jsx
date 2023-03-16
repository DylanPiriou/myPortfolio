import React, { useEffect, useRef } from 'react';
import "../assets/Style/HomeTitle.scss";
import { gsap } from "gsap";

export default function HomeTitle() {
  const txt1 = useRef();
  const txt2 = useRef();
  const txt3 = useRef();
  const tl = gsap.timeline();

  useEffect(() => {
    tl
    .fromTo(txt1.current, {
      y: 200,
      duration: 2
    },
    {
      y: 0,
      delay: .3
    })
    .fromTo(txt2.current, {
      y: 400,
      duration: 1,
    },
    {
      y: 0,
      delay: -.2
    })
    .fromTo(txt3.current, {
      y: 600,
      duration: 1
    },
    {
      y: 0,
      delay: -.4
    })

    return () => {
      tl.clear();
    }
  }, []);

  return (


    <h1 className="container">
      <div className="texte"><h2 ref={txt1}>Hello,</h2></div>
      <div className="texte"><h2 ref={txt2}>Im a <span className="serif-font">frontend&nbsp;&nbsp;&nbsp;</span></h2></div>
      <div className="texte"><h2 ref={txt3}><span className="colored-font">developer</span></h2></div>
    </h1>



    // <h1>
    //     <div className="txt-wrapper">
    //       <span>Hello,</span>
    //     </div>
    //     <div className="txt-wrapper">
    //       <span>Im a FrontEnd</span>
    //     </div>
    //     <div className="txt-wrapper">
    //       <span>Developer</span>
    //     </div>
    // </h1>
  )
}
