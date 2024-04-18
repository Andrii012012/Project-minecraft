import React from "react";
import styles from "./style.module.scss";
import { IDataServer } from "../../../../interface/interface";

export default function UserListStatuses(props: { list: IDataServer[] }) {
  let { list } = props;
  return (
    <>
      {list.map((item: IDataServer, index: number) => {
        if (index > 0)
          return (
            <li className={styles.item}>
              {item.status} <span>{item.server}</span>#{item.server_id}
            </li>
          );
      })}
    </>
  );
}
