import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../../styles/style.module.scss";
import { TCards } from "../../interface/type";

interface IProps {
  list: TCards[];
}

export default function CardList(props: IProps): JSX.Element {
  let { list } = props;
  return (
    <>
      {list.map((item: TCards, index: number) => (
        <li
          key={index}
          className={`${styles.itemPlaySystem} ${gStyles.textMedium}`}
        >
          <img src={item.img} alt="" />
        </li>
      ))}
    </>
  );
}
