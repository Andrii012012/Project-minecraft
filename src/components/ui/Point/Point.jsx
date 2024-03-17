import React from "react";
import "./pointStyle.css";
import "./pointMedia.css";
import { memo } from "react";

const Point = memo((props) => {
  let { className, background, text } = props;
  return (
    <div
      className={`point ${className}`}
      style={{ backgroundColor: `${background}` }}
    >
      <span>{text}</span>
    </div>
  );
});

export default Point;
