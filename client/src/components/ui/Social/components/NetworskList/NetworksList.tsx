import React from "react";
import styles from "./style.module.scss";

type TSocial = Record<"icon" | "href" | "background", string>;

export default function NetworksList(props: { list: TSocial[] }) {
  let { list } = props;
  return (
    <>
      {list.map((item: TSocial, _) => (
        <li
          key={item.icon}
          className={styles.item}
          style={{ background: item.background }}
        >
          <a href={item.href}>
            <img className={styles.icon} src={item.icon} alt="" />
          </a>
        </li>
      ))}
    </>
  );
}
