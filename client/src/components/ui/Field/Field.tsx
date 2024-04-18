import React from "react";
import styles from "./style.module.scss";
import { IGlocalFieldInput } from "../../../interface/interface";
import { TGlobalFieldInput } from "../../../interface/type";

interface IProps<T> {
  type?: string;
  id?: string;
  name: string;
  placeholder?: string;
  value?: string;
  setValue?: T;
  className?: string;
  field?: string;
}

export default function Field<T extends TGlobalFieldInput>(props: IProps<T>): JSX.Element {
  let {
    type = "text",
    id = "",
    name,
    placeholder = "",
    value = '',
    setValue = "",
    className,
    field = "field",
  } = props;

  function changeValue(e: React.ChangeEvent<HTMLInputElement>): void {
    if (typeof setValue === "function") {
      setValue((prevState) => {
        const newValue = { ...prevState };
        newValue[field] = e.target.value;
        return newValue;
      });
    }
  }

  return (
    <>
      <input
        className={`${styles.field} ${className}`}
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        name={name}
        onChange={(e) => changeValue(e)}
      />
    </>
  );
}
