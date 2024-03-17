import React from "react";
import "./optionsListMedia.css";
import "./optionsListStyle.css";

import clearClass from "../../../../utils/clearClass";

export default function OptionsList(props) {
  let {
    list,
    setValue,
    setValueSelect,
    value,
    refSelectList,
    refSelect,
    refHeightElement,
    changeKey,
    sybmol,
    refLi,
  } = props;

  function onItemSelected(e, itemOne, itemTwo) {
    clearClass("select-item-hidden");
    e.target.classList.add("select-item-hidden");
    refSelect.classList.remove("active-select");
    refSelectList.style.height = "0px";
    if (value.minusHeight) {
      setValueSelect((prevState) => {
        const newObject = { ...prevState };
        newObject.height = newObject.height - refHeightElement;
        newObject.minusHeight = false;
        return newObject;
      });
    }
    setValue((prevState) => {
      const newObject = { ...prevState };
      newObject[changeKey[0]] = itemOne;
      if (changeKey.length > 0) newObject[changeKey[1]] = itemTwo;
      return newObject;
    });
  }

  return (
    <>
      {list.map((item, index) => {
        console.log(item['server_id']);
        return(
        <li
          onClick={(e) =>
            onItemSelected(e, item[changeKey[0]], item['server_id'])
          }
          ref={refLi}
          key={index}
          className="select__item"
        >
          {item[changeKey[0]]}{" "}
          {item["server_id"] && (
            <span>
              <span>{sybmol}</span>
              {item["server_id"]}
            </span>
          )}
        </li>
      )})}
    </>
  );
}
