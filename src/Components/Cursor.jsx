import React, { useEffect, useRef } from 'react';
import "../assets/Style/Cursor.scss";

export default function Cursor() {
    const cursor = useRef();
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            const x = e.pageX - 15;
            const y = e.pageY - 15;
            cursor.current.style.top = `${y}px`;
            cursor.current.style.left = `${x}px`;
        })
    }, []);

  return (
    <div className="cursor" ref={cursor}>
    </div>
  )
}
