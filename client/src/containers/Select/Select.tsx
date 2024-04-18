import React from "react";
import styles from "./style.module.scss";
import gStyles from '../../styles/style.module.scss';
import { IGlobalValuesSelect, IServer } from "../../interface/interface";
import { useRef, useEffect, useState } from "react";
import arrowDown from "../../assets/images/global/arrow-down.svg";
import OptionsList from "./components/OptionsList/OptionsList";
import { TOptions, TSetOptions } from "./interface/types";
import { TGlobalSetValues } from "../../interface/type";

interface IProps<T, K> {
  options: IServer[];
  className?: string;
  setValue: T;
  value: K;
  changeKey: string[];
  symbol?: string;
} 

export default function Select<T extends TGlobalSetValues, K extends IGlobalValuesSelect>(
  props: IProps<T, K>
) {
  let {
    options,
    className = "",
    setValue,
    value,
    changeKey,
    symbol = "#",
  } = props;

  const [optionsElement, setOptionsElement] = useState<TOptions>({
    height: 0,
    minusHeight: true,
  });

  const ref = {
    refSelectHeader: useRef<number>(0),
    refSelectList: useRef<HTMLUListElement>(null!),
    refSelect: useRef<HTMLDivElement>(null!),
    refItem: useRef<HTMLLIElement>(null!),
    refHeightElement: useRef<number>(0),
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
      document.addEventListener("click", (e: globalThis.MouseEvent) => {
        if (refSelect && e.target instanceof Element) {
          if (!e.target.closest(`.${styles.select}`) && refSelectList) {
            refSelect.classList.remove("activeSelect");
            refSelectList.style.height = `0px`;
          }
        }
      });

      setTimeout(() => {
        if (
          ref.refSelectList.current &&
          refSelectList.getBoundingClientRect().height > 0
        ) {
          setOptionsElement((prevState) => {
            const newObject = { ...prevState };
            newObject.height = refSelectList.getBoundingClientRect().height;
            return newObject;
          });
          refSelectList.style.height = "0px";
          ref.refHeightElement.current = refItem.getBoundingClientRect().height;
        }
      }, 200);

      return () => document.removeEventListener("click", () => {});
    }, 0);
  }, []);

  function onActiveSelect(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target instanceof Element && !e.target.closest(`.${styles.list}`)) {
      refSelect.classList.add("activeSelect");
      refSelectList.style.height = `${optionsElement.height}px`;
    }
  }

  const serverName = value[changeKey[0] as keyof K];
  const serverId = value[changeKey[1] as keyof K];

  return (
    <div
      ref={ref.refSelect}
      onClick={(e) => onActiveSelect(e)}
      className={`${styles.select} ${className}`}
    >
      <div className={styles.header}>
        <div className={styles.close}>
          <img src={arrowDown} alt="" />
        </div>
        <span className={`${styles.selectSelected} ${gStyles.textMedium}`}>
          {serverName as keyof React.ReactNode}{" "}
          {(serverId as keyof React.ReactNode) && <span>{symbol}</span>}
          {serverId as keyof React.ReactNode}
        </span>
      </div>
      <ul ref={ref.refSelectList} className={styles.list}>
        <OptionsList<T, TOptions, TSetOptions>
          list={options}
          setValueSelect={setOptionsElement}
          value={optionsElement}
          refSelect={refSelect}
          refSelectList={refSelectList}
          refHeightElement={refHeightElement}
          changeKey={changeKey}
          symbol={symbol}
          refLi={ref.refItem}
          setValue={setValue}
        />
      </ul>
    </div>
  );
}
