import React from "react";
import "./sectionsStyle.css";
import "./sectionsMedia.css";
import { Link } from "react-router-dom";

export default function Sections(props) {
  let { list } = props;
  return (
    <ul className="settings__navigator">
      {list.map((item, index) => {
        return (
          <li key={index} className="settings__point">
            <Link to={item.path}>
              <img className="settings__image-point" src={item.image} alt="" />
              <p className="settings__text-point">{item.text}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
