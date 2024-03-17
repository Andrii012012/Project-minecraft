import React from "react";
import "./selectingStyle.css";
import "./selectingMedia.css";
import Select from "../../containes/Select/Select";

export default function Selecting(props) {
  let {className = "", text, options, setValue, value, changeKey} = props;
 

  return (
    <div className={`selecting ${className}`}>
      <h2 className="selecting__title">
        {text}
      </h2>
      <Select
        options={options}
        setValue={setValue}
        value={value}
        changeKey={changeKey}
      />
    </div>
  );
}
