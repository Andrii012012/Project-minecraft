import React from "react";
import './ListNav.css';
import './ListNavMediaStyle.css';
import { NavLink } from "react-router-dom";

export default function ListNav(props) {
 let {className, text, path, href, target} = props;
  return (
    <>
      <li className={`item-nav ${className || ''}`}>
        {path ? <NavLink to={path}>{text}</NavLink> : <a target={target} href={href}>{text}</a>}
      </li>
    </>
  );
}
