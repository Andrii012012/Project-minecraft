import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../../styles/style.module.scss";

interface IInfoUser {
  text: string;
  info: string | number;
}

export default function UserData(props: { list: IInfoUser[] }) {
  let { list } = props;
  return (
    <>
      {list.map((item, index) => (
        <li key={index} className={styles.item}>
          <p className={`${styles.text} ${gStyles.textMedium}`}>{item.text}</p>
          <p className={`${gStyles.textMedium} ${styles.data}`}>{item.info}</p>
        </li>
      ))}
    </>
  );
}
