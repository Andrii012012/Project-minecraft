import React from "react";
import "./selectStyle.css";
import "./selectMedia.css";
import { useRef, useEffect, useState } from "react";
import arrowDown from "../../assets/images/global/arrow-down.svg";
import OptionsList from "./components/OptionsList/OptionsList";

export default function Select(props) {
  let { options, className, setValue, value, changeKey, sybmol = "#" } = props;

  const [optionsElement, setOptionsElement] = useState({
    height: 0,
    minusHeight: true,
  });

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

      return () => document.removeEventListener("click");
    }, 0);
  }, []);

  function onActiveSelect(e) {
    if (!e.target.closest(".select__list")) {
      refSelect.classList.add("active-select");
      refSelectList.style.height = `${optionsElement.height}px`;
    }
  }

  return (
    <div
      ref={ref.refSelect}
      onClick={(e) => onActiveSelect(e)}
      className={`select ${className}`}
    >
      <div className="select__header">
        <div className="select_close">
          <img src={arrowDown} alt="" />
        </div>
        <span className="select__selected">
          {value[changeKey[0]]} {value[changeKey[1]] && <span>{sybmol}</span>}
          {value[changeKey[1]]}
        </span>
      </div>
      <ul ref={ref.refSelectList} className="select__list">
        <OptionsList
          list={options}
          setValueSelect={setOptionsElement}
          value={optionsElement}
          refSelect={refSelect}
          refSelectList={refSelectList}
          refHeightElement={refHeightElement}
          changeKey={changeKey}
          sybmol={sybmol}
          refLi={ref.refItem}
          setValue={setValue}
        />
      </ul>
    </div>
  );
}
