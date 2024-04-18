import React from "react";
import styles from "./style.module.scss";
import gStyles from '../../../../styles/style.module.scss';
import { NavLink } from "react-router-dom";
import { IItemMenu } from "../../interface/interface";

export default function ItemListMenu(props: {
  list: IItemMenu[];
}): JSX.Element {
  let { list } = props;
  return (
    <>
      {list.map((item: IItemMenu, index: number) => (
        <li key={index} className={`${styles.title} ${gStyles.textMedium} ${styles.item}`}>
          <NavLink to={item.path}>{item.name}</NavLink>
        </li>
      ))}
    </>
  );
}
