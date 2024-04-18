import React from "react";
import styles from "./style.module.scss";
import gStyles from '../../../../styles/style.module.scss';
import { NavigateFunction } from "react-router-dom";

interface IProps {
  name: string;
  avatar: string;
  status: string;
  onCheckingProfile: NavigateFunction;
}

export default function DataMemberTeam(props: IProps): JSX.Element {
  let { name, avatar, status, onCheckingProfile } = props;

  return (
    <li
      onClick={() => onCheckingProfile(`/profile/${name}`)}
      className={styles.item}
    >
      <div className={styles.icon}>
        <img
          src={require(`../../../../assets/upload/avatars/${avatar}`)}
          alt=""
        />
      </div>
      <div className={styles.info}>
        <p className={`${styles.name} ${gStyles.textBig}`}>{name}</p>
        <p className={`${styles.status} ${gStyles.textMedium}`}>{status}</p>
      </div>
    </li>
  );
}
