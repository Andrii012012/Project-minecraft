import React from "react";
import './ButtonNav.css';
import "./ButtonNavMediaStyle.css";
import { NavLink } from "react-router-dom";

 export default function ButtonNav(props){
    let { className, path, text } = props;
     return (
        <NavLink className={`button-nav ${className}`} to={path}>{text}</NavLink>
     )
 }