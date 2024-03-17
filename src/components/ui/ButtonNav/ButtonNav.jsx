import React from "react";
import "./buttonNavStyle.css";
import "./buttonNavMedia.css";
import { NavLink } from "react-router-dom";
import { memo } from "react";

const ButtonNav = memo((props) => {
  let { className, path, text } = props;
  return (
    <NavLink className={`button-nav ${className}`} to={path}>
      {text}
    </NavLink>
  );
});

export default ButtonNav;
