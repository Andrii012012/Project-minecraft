import React from "react";
import "./listNavStyle.css";
import "./listNavMedia.css";
import { NavLink } from "react-router-dom";
import { memo } from "react";

const ListNav = memo((props) => {
  let { className, text, path, href, target } = props;
  return (
    <>
      <li className={`item-nav ${className || ""}`}>
        {path ? (
          <NavLink to={path}>{text}</NavLink>
        ) : (
          <a target={target} href={href}>
            {text}
          </a>
        )}
      </li>
    </>
  );
});

export default ListNav;
