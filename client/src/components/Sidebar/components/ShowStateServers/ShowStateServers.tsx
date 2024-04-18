import React from "react";
import styles from "./style.module.scss";
import gStyles from '../../../../styles/style.module.scss';

type TList = {
  serverName: string;
  maxPlayers: number;
  playersNow: number;
};

interface IProps {
  list: Array<TList>;
}

export default function ShowStateServers(props: IProps): JSX.Element {
  let { list } = props;
  return (
    <ul className={styles.list}>
      {list.map((item, index) => (
        <li key={index} className={styles.item}>
          <p className={`${styles.serverName} ${gStyles.textBig}`}>{item.serverName}</p>
          <div className={styles.countPlayers}>
            <strong className={`${styles.statePlayers} ${gStyles.textMedium}`}>
              {item.playersNow} из {item.maxPlayers}
            </strong>
          </div>
          <div className={styles.indicatorContainer}>
            <div
              className={styles.indicator}
              style={{ width: `${item.playersNow}%` }}
            ></div>
          </div>
        </li>
      ))}
    </ul>
  );
}
