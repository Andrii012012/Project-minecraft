import React from "react";
import "./Select.css";
import "./SelectMediaStyle.css";
import { useRef, useEffect, useState } from "react";
import arrowDown from "../../../assets/images/global/arrow-down.svg";
import clearClass from "../../../utils/clearClass";

export default function Select(props) {
  let {
    options,
    className,
    setValue,
    value,
    changeThing,
    sybmol = "#",
  } = props;

  const ref = {
    refSelectHeader: useRef(null),
    refSelectList: useRef(null),
    refSelect: useRef(null),
    refItem: useRef(null),
    refHeightElement: useRef(null),
  };

  let refSelectList = ref.refSelectList.current;
  let refSelect = ref.refSelect.current;
  let refItem = ref.refItem.current;
  let refHeightElement = ref.refHeightElement.current;

  const [optionsElement, setOptionsElement] = useState({
    height: 0,
    minusHeight: true,
  });

  useEffect(() => {
    refSelectList = ref.refSelectList.current;
    refSelect = ref.refSelect.current;
    refItem = ref.refItem.current;
    refHeightElement = ref.refHeightElement.current;
  }, [ref]);

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener("click", (e) => {
        if (refSelect) {
          if (!e.target.closest(".select")) {
            refSelect.classList.remove("active-select");
            refSelectList.style.height = `0px`;
          }
        }
      });

      return () => document.removeEventListener("click");
    }, 0);
  }, []);

  function activeSelect(e) {
    if (!e.target.closest(".select__list")) {
      refSelect.classList.add("active-select");
      refSelectList.style.height = `${optionsElement.height}px`;
    }
  }

  function itemSelected(e, itemOne, itemTwo) {
    clearClass("select-item-hidden");
    e.target.classList.add("select-item-hidden");
    refSelect.classList.remove("active-select");
    refSelectList.style.height = "0px";
    if (optionsElement.minusHeight) {
      setOptionsElement((prevState) => {
        const newObject = { ...prevState };
        newObject.height = newObject.height - refHeightElement;
        newObject.minusHeight = false;
        return newObject;
      });
    }
    setValue((prevState) => {
      const newObject = { ...prevState };
      newObject[changeThing[0]] = itemOne;
      if (changeThing.length > 0) newObject[changeThing[1]] = itemTwo;
      return newObject;
    });
  }

  useEffect(() => {
    setTimeout(() => {
      if (refSelectList.getBoundingClientRect().height > 0)
        setOptionsElement((prevState) => {
          const newObject = { ...prevState };
          newObject.height = refSelectList.getBoundingClientRect().height;
          return newObject;
        });
      refSelectList.style.height = "0px";
      ref.refHeightElement.current = refItem.getBoundingClientRect().height;
    }, 100);
  }, []);

  return (
    <div
      ref={ref.refSelect}
      onClick={(e) => activeSelect(e)}
      className={`select ${className}`}
    >
      <div className="select__header">
        <div className="select_close">
          <img src={arrowDown} alt="" />
        </div>
        <span className="select__selected">
          {value[changeThing[0]]}{" "}
          {value[changeThing[0]] && <span>{sybmol}</span>}
          {value[changeThing[1]]}
        </span>
      </div>
      <ul ref={ref.refSelectList} className="select__list">
        {options.map((item, index) => (
          <li
            onClick={(e) =>
              itemSelected(e, item[changeThing[0]], item[changeThing[1]])
            }
            ref={ref.refItem}
            key={index}
            className="select__item"
          >
            {item[changeThing[0]]} <span>{sybmol}</span>
            {item[changeThing[1]]}
          </li>
        ))}
      </ul>
    </div>
  );
}
