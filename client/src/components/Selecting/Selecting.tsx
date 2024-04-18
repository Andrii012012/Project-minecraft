import React from "react";
import styles from "./style.module.scss";
import gStyles from '../../styles/style.module.scss';
import { IGlobalValuesSelect, IServer } from "../../interface/interface";
import Select from "../../containers/Select/Select";
import { TGlobalSetValues } from "../../interface/type";

interface IProps<T, K> {
  className?: string;
  text: string;
  options: IServer[];
  setValue: T;
  value: K;
  changeKey: string[];
}

export default function Selecting<
  T extends TGlobalSetValues,
  K extends IGlobalValuesSelect,
>(props: IProps<T, K>): JSX.Element {
  let { className = "", text, options, setValue, value, changeKey } = props;
  
  return (
    <div className={`${styles.selecting} ${className}`}>
      <h2 className={gStyles.textMedium}>{text}</h2>
      <Select<T, K>
        options={options}
        setValue={setValue}
        value={value}
        changeKey={changeKey}
      />
    </div>
  );
}
