import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../../styles/style.module.scss";
import { ISettings } from "../../interface/interface";
import { TSetSettings } from "../../interface/type";

interface IProps {
  options: string;
  setValue: TSetSettings;
  value: ISettings;
}

export default function SetDescription(props: IProps): JSX.Element {
  let { options, setValue, value } = props;

  function changeValue(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue((prevState) => {
      const newData = { ...prevState };
      newData[options] = e.target.value;
      return newData;
    });
  }

  return (
    <>
      <h3 className={`${styles.title} ${gStyles.titleSmall}`}>
        Описаные в профиле:
      </h3>
      <textarea
        className={`${styles.description} ${gStyles.textSmall}`}
        value={value[options]}
        onChange={(e) => changeValue(e)}
      ></textarea>
    </>
  );
}
