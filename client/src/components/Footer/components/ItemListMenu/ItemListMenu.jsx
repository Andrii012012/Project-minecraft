import React from "react";
import "./ItemListMenuStyle.css";
import "./ItemListMenuMedia.css";
import { NavLink } from "react-router-dom";

export default function ItemListMenu(props) {
  let { list } = props;
  return (
    <>
      {list.map((item, index) => (
        <li key={index} className="footer__item">
          <NavLink to={item.path}>{item.name}</NavLink>
        </li>
      ))}
    </>
  );
}
