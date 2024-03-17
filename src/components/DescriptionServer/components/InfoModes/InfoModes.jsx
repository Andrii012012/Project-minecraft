import React from "react";
import "./infoModesStyle.css";
import "./infoModesMedia.css";

export default function InfoModes(props) {
  let {list} = props;
  return (
    <>
      {list.map((item, _) => {
        let { icon, title, text } = item;
        return (
          <li key={title} className="about-mods__item">
            <img className="about-mods__icon" src={icon} alt="" />
            <div className="about-mods__body-description">
              <h3 className="about-mods__name-mode">{title}</h3>
              <p className="about-mods__description-mode">{text}</p>
            </div>
          </li>
        );
      })}
    </>
  );
}
