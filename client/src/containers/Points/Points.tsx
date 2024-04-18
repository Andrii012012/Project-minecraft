import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../styles/style.module.scss";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

interface IProps {
  className?: string;
  pointName?: string;
  dataTp?: string;
  image: string;
  path?: string;
}

export default function Points(prosp: IProps): JSX.Element {
  let {
    className = "",
    pointName = "",
    dataTp = null,
    image,
    path = false,
  } = prosp;

  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (dataTp) {
      setTimeout(() => {
        const element: HTMLElement | null = document.getElementById(
          `${dataTp}`
        );
        if (ref.current && element instanceof Element) {
          const coordinate: number =
            element.getBoundingClientRect().top + document.body.scrollTop;
          ref.current.addEventListener("click", () => {
            window.scrollTo(0, Number(coordinate.toFixed(0)));
          });
        }
      }, 100);
    }
  }, []);

  if (!path) {
    return (
      <li ref={ref} className={`${styles.goSection} ${className}`}>
        <img className={styles.icon} src={image} alt="" />
        <p className={styles.text}>{pointName}</p>
      </li>
    );
  } else {
    return (
      <NavLink className={`${styles.goSection} ${className}`} to={path}>
        <img className={styles.icon} src={image} alt="" />
        <p className={`${styles.text} ${gStyles.textMedium}`}>{pointName}</p>
      </NavLink>
    );
  }
}
