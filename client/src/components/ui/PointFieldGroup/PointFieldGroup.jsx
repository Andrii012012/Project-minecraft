import React from "react";
import "./pointFieldGroupStyle.css";
import "./pointFieldGroupMedia.css";
import Point from "../Point/Point";

export default function PointFieldGroup(props) {
  let { children, point = true, number = "", background } = props;
  return (
    <li className={`field-fill`}>
      <div className="field-fill__body-info">
        {point && (
          <Point
            className={`field-fill__point`}
            text={number}
            background={background}
          />
        )}
      </div>
      {children}
    </li>
  );
}
