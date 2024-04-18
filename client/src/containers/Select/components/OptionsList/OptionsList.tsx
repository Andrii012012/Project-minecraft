import React from "react";
import styles from "./styles.module.scss";
import gStyles from '../../../../styles/style.module.scss';
import { IServer } from "../../../../interface/interface";
import clearClass from "../../../../utils/clearClass";
import { TOptions, TSetOptions } from "../../interface/types";
import { TGlobalSetValues } from "../../../../interface/type";

interface IProps<T, K, U> {
  list: IServer[];
  setValue: T;
  setValueSelect: U;
  value: K;
  refSelectList: HTMLUListElement | null;
  refSelect: HTMLDivElement | null;
  refHeightElement: number;
  changeKey: string[];
  symbol?: string;
  refLi: React.LegacyRef<HTMLLIElement>;
}

export default function OptionsList<
  T extends TGlobalSetValues,
  K extends TOptions ,
  U extends TSetOptions
>(props: IProps<T, K, U>) {
  let {
    list,
    setValue,
    setValueSelect,
    value,
    refSelectList,
    refSelect,
    refHeightElement,
    changeKey,
    symbol,
    refLi,
  } = props;

  function onItemSelected(
    e: React.MouseEvent<HTMLLIElement>,
    itemOne: string,
    itemTwo: string
  ) {
    if (
      e.target instanceof HTMLLIElement &&
      refSelect &&
      refSelectList instanceof HTMLUListElement
    ) {
      clearClass(styles.selectItemHidden);
      e.target.classList.add(styles.selectItemHidden);
      refSelect.classList.remove("activeSelect");
      refSelectList.style.height = "0px";

      if (value.minusHeight) {
        setValueSelect((prevState) => {
          const newObject = { ...prevState };
          newObject.height = newObject.height - refHeightElement;
          newObject.minusHeight = false;
          return newObject;
        });
      }

      //This needs handle

      setValue((prevState: any) => {
        const newObject = { ...prevState };
        newObject[changeKey[0]] = itemOne;
        if (changeKey.length > 0) newObject[changeKey[1]] = itemTwo;
        return newObject;
      });
    }
  }

  return (
    <>
      {list.map((item: IServer, index: number) => {
        const serverId = item[changeKey[0] as keyof IServer];
        return (
          <li
            onClick={(e) =>
              onItemSelected(
                e,
                serverId as keyof React.ReactNode,
                item["server_id"] as keyof React.ReactNode
              )
            }
            ref={refLi}
            key={index}
            className={`${styles.item} ${gStyles.textMedium}`}
          >
            {serverId as keyof React.ReactNode}{" "}
            {item["server_id"] && (
              <span>
                <span>{symbol}</span>
                {item["server_id"]}
              </span>
            )}
          </li>
        );
      })}
    </>
  );
}
