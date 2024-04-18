import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../styles/style.module.scss";

interface IProps<T> {
  className?: string;
  type?: string;
  name?: string;
  title?: string;
  subtitle?: string;
  changeKey: string;
  value: string | undefined;
  setValue: T;
}

export default function PointFieldFilling<T>(props: IProps<T>): JSX.Element {
  let {
    type = "text",
    name = "",
    title = "",
    subtitle = "",
    changeKey,
    value,
    className = "",
    setValue,
  } = props;

  function changeValue(e: React.ChangeEvent<HTMLInputElement>): void {
    if (typeof setValue === "function") {
      setValue((prevState: any) => {
        const newState = { ...prevState };
        newState[changeKey] = e.target.value;
        return newState;
      });
    }
  }

  return (
    <>
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <strong className={`${styles.text} ${gStyles.textSmall}`}>
          {subtitle}
        </strong>
      </div>
      <div className={styles.bodyField}>
        <input
          className={`${styles.field} ${className}`}
          type={type}
          name={name}
          value={value ? value : ""}
          onChange={(e) => changeValue(e)}
        />
      </div>
    </>
  );
}
