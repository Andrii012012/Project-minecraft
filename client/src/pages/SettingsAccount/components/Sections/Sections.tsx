import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../../styles/style.module.scss";
import { Link } from "react-router-dom";
import { TMains } from "../../interface/type";

export default function Sections(props: { list: TMains[] }) {
  let { list } = props;
  return (
    <ul className={styles.navigator}>
      {list.map((item: TMains, index: number) => {
        return (
          <li key={index} className={styles.item}>
            <Link to={item.path}>
              <img className={styles.image} src={item.image} alt="" />
              <p className={`${styles.text} ${gStyles.textMedium}`}>
                {item.text}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
