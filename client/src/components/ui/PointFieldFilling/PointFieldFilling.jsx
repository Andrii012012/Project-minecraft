import React from "react";
import "./pointFieldFillingStyle.css";
import "./pointFieldFillingMedia.css";

export default function PointFieldFilling (props){
  let {
    type = "text",
    name = null,
    title = "",
    subtitle = "",
    changeKey,
    value,
    setValue,
  } = props;
  return (
    <>
      <div className="point-field-filling__info">
        <p className="point-field-filling__point-title">{title}</p>
        <strong className="point-field-filling__text">{subtitle}</strong>
      </div>
      <div className="point-field-filling__body-field">
        <input
          className="point-field-filling__login field"
          type={type}
          name={name}
          value={value[changeKey]}
          onChange={(e) =>
            setValue((prevState) => {
              const newState = { ...prevState };
              newState[changeKey] = e.target.value;
              return newState;
            })
          }
        />
      </div>
    </>
  );
};
