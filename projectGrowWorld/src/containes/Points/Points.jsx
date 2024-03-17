import React from "react";
import "./Points.css";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export default function Points(prosp) {
  let { className, pointName = "", dataTp = null, image, path = false } = prosp;
  const ref = useRef(null);

  useEffect(() => {
      if (dataTp) {
        setTimeout(() => {
          const element = document.getElementById(`${dataTp}`);
          const coordinate = 
            element.getBoundingClientRect().top + document.body.scrollTop;
          if (ref.current) {
            ref.current.addEventListener("click", () => {
              window.scrollTo(0, coordinate.toFixed(0));
            });
          }
        }, 100);
      }
  }, []);

  if (!path) {
    return (
      <div ref={ref} className={`questions__go-section ${className}`}>
        <img className="questions__icon" src={image} alt="" />
        <p className="questions__text">{pointName}</p>
      </div>
    );
  } else {
    return (
      <NavLink className={`questions__go-section ${className}`} to={path}>
        <img className="questions__icon" src={image} alt="" />
        <p className="questions__text">{pointName}</p>
      </NavLink>
    );
  }
}
