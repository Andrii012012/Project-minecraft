import React from "react";
import styles from "./style.module.scss";
import Points from "../../../../containers/Points/Points";
import { TListNavigator } from "../../interface/type";

export default function RulesNavigator(props: {
  list: TListNavigator[];
}): JSX.Element {
  let { list } = props;
  return (
    <ul className={styles.list}>
      {list.map((item: TListNavigator, index: number) => (
        <Points
          key={index}
          className={item.className}
          dataTp={item.dataTp}
          image={item.image}
          pointName={item.pointName}
        />
      ))}
    </ul>
  );
}
