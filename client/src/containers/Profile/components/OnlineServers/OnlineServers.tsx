import React from "react";
import styles from "./style.module.scss";
import gStyles from '../../../../styles/style.module.scss';
import { IDataServer } from "../../../../interface/interface";

export default function OnlineServers(props: {
  list: IDataServer[];
}): JSX.Element {
  let { list } = props;
  return (
    <>
      {list.map((item, _) => {
        return (
          <li className={styles.item}>
            <p className={styles.serverName}>
              {item.server} <span>#{item.server_id}</span>
            </p>
            <p className={`${styles.online} ${gStyles.textMedium}`}>{item.time} часов</p>
          </li>
        );
      })}
    </>
  );
}
