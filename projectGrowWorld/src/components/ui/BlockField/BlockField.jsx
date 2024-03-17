import React from "react";
import "./BlockField.css";
import "./BlockFieldMediaStyle.css";
import Point from "../point/Point";
import "../field/field.css";

export default function BlockField(props) {
  let {
    className,
    classNamePoint = '',
    type,
    name,
    point = true,
    title = null,
    text = null,
    background,
    number = null,
    valueField,
    setValueField,
    changeThing,
  } = props;
  return (
    <li className={`field-fill ${className}`}>
      <div className="field-fill__body-info">
        {point && (
          <Point
            className={`field-fill__point ${classNamePoint}`}
            text={number}
            background={background}
          />
        )}
        <div className="field-fill__info">
          <p className="field-fill__point-title">{title}</p>
          <strong className="field-fill__text">{text}</strong>
        </div>
      </div>
      <div className="field-fill__body-field">
        <input
          className="field-fill__login field"
          type={type}
          name={name}
          value={valueField[changeThing]}
          onChange={(e) =>
            setValueField((prevState) => {
              const newState = { ...prevState };
              newState[changeThing] = e.target.value;
              return newState;
            })
          }
        />
      </div>
    </li>
  );
}
