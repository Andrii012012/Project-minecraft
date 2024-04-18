import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

type TList = Record<"img" | "text" | "path", string>;

interface IProps {
  list: TList[];
}

export default function ListOpportunity(props: IProps) {
  let { list } = props;
  return (
    <>
      {list.map((item, _) => (
        <li className={styles.item}>
          <Link to={item.path} className={styles.body}>
            <div className={styles.icon}>
              <img src={item.img} alt="" />
            </div>
            <p className={styles.text}>{item.text}</p>
          </Link>
        </li>
      ))}
    </>
  );
}
