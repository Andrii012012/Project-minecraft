import React from "react";
import "./ButtonSend.css";
import "./ButtonSendMediaStyle.css";

export default function ButtonSend(props) {
  let { className, text, background = "#89da59", color = "#fff" } = props;
  return (
      <button
        className={`button-send ${className}`}
        type="submit"
        style={{ backgroundColor: `${background}`, color: `${color}` }}
      >
        {text}
      </button>
  );
}
