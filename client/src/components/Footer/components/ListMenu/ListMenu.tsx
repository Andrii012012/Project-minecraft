import React from "react";
import styles from "./style.module.scss";
import gStyles from '../../../../styles/style.module.scss';
import ItemListMenu from "../ItemListMenu/ItemListMenu";
import { IListMenu } from "../../interface/interface";

export default function ListMenu(props: { list: IListMenu[] }): JSX.Element {
  let { list } = props;
  return (
    <>
      {list.map((item: IListMenu, index: number) => (
        <div key={index} className={styles.listBlock}>
          <h2 className={`${styles.title} ${gStyles.textBig}`}>{item.title}</h2>
          <ul className={styles.list}>
            <ItemListMenu list={item.item} />
          </ul>
        </div>
      ))}
    </>
  );
}
