import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../../styles/style.module.scss";
import { TBranchesList } from "../../interface/type";

export default function Branches(props: {
  list: TBranchesList[];
}): JSX.Element {
  let { list } = props;
  return (
    <>
      {list.map((item, index: number) => (
        <section key={index} className={styles.sectionName}>
          <h2 className={`${styles.sectionName} ${gStyles.titleMedium}`}>
            {item.title}
          </h2>
          {item.component()}
        </section>
      ))}
    </>
  );
}
