import React, {useEffect, useRef} from 'react';
import "../assets/Style/ScrollIndicator.scss";
import { gsap } from 'gsap';

export default function ScrollIndicator() {
    const scrollInfo = useRef();
    useEffect(() => {
      gsap.fromTo(scrollInfo.current, {
        opacity: 0
      }, {
        opacity: 1,
        duration: 1,
        delay: 1
      })
    }, [])
  return (
    <div className="scroll-info" ref={scrollInfo}>
        <img src="arrow.svg" className="arrow-icon" alt="" />
        <p>SCROLL TO DISCOVER ME</p>
    </div>
  )
}
