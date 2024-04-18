import React from "react";
import styles from "./style.module.scss";
import pStyles from "../../style.module.scss";

interface IProps {
  list: (string | number)[];
}

export default function OpportunityHas(props: IProps): JSX.Element {
  let { list } = props;
  return (
    <>
      {list.map((item: string | number, _) => {
        if (String(item).includes("/static/media/")) {
          return (
            <th key={item as keyof React.ReactNode} className={pStyles.item}>
              <img
                className={styles.icon}
                src={item as keyof React.ReactNode}
                alt=""
              />
            </th>
          );
        } else {
          return (
            <th key={item as keyof React.ReactNode} className={pStyles.item}>
              <p>{item as keyof React.ReactNode}</p>
            </th>
          );
        }
      })}
    </>
  );
}
