import React from "react";
import "./fieldStyle.css";
import "./fieldMedia.css";

export default function Field(props) {
  let {
    type = "text",
    id = null,
    name,
    placeholder = null,
    value = null,
    setValue = null,
    className,
    field = "field",
  } = props;
  return (
    <>
      <input
        className={`field ${className}`}
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        name={name}
        onChange={(e) =>
          setValue((prevState) => {
            const newValue = { ...prevState };
            newValue[field] = e.target.value;
            return newValue;
          })
        }
      />
    </>
  );
}
