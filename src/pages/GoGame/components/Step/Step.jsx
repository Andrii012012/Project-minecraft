import React from "react";
import "./stepStyle.css";
import "./stepMedia.css";
import Point from "../../../../components/ui/Point/Point.jsx";
import ButtonNav from "../../../../components/ui/ButtonNav/ButtonNav.jsx";

export default function Step(props) {
  let { list } = props;
  return (
    <>
      {list.map((item, index) => (
        <li index={index} className="go-game__item">
          <Point
            className="go-game__point"
            text={item.textPoint}
            background={item.backgroundPoint}
          />
          <div className="go-game__register">
            <p className="go-game__text title-section">{item.title}</p>
            <ButtonNav
              className={`go-game__btn ${item.className}`}
              path={item.to}
              text={item.text}
              background={item.background}
            />
          </div>
        </li>
      ))}
    </>
  );
}
