import React from "react";
import "./buttonSendStyle.css";
import "./buttonSendMedia.css";
import { memo } from "react";

const ButtonSend = memo((props) => {
  let {
    className,
    text,
    background = "var(--lime-green)",
    color = "#fff",
  } = props;
  return (
    <button
      className={`button-send ${className}`}
      type="submit"
      style={{ backgroundColor: `${background}`, color: `${color}` }}
    >
      {text}
    </button>
  );
});

export default ButtonSend;
