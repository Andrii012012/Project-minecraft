import React from "react";
import "./SelectThing.css";
import "./SelectThingMediaStyle.css";
import Select from '../ui/Select/Select.jsx';

export default function SelectThing(props) {
  let {className = "", text, options, setValue, value, changeThing} = props;
  return (
    <div className={`select-thing ${className}`}>
      <h2 className="select-thing__title">
        {text}
      </h2>
      <Select
        options={options}
        setValue={setValue}
        value={value}
        changeThing={changeThing}
      />
    </div>
  );
}
