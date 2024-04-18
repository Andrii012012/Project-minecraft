import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../../styles/style.module.scss";

interface IProps {
  avatar: string;
  name: string;
}

export default function HeaderUser(props: IProps): JSX.Element {
  let { avatar, name } = props;
  return (
    <div className={styles.header}>
      <div className={styles.user}>
        <div className={`${styles.avatar} ${gStyles.avatar}`}>
          <img
            src={require(`../../../../assets/upload/avatars/${avatar}`)}
            alt="image"
          />
        </div>
        <div>
          <h1 className={`${styles.title} ${gStyles.titleBig}`}>
            Настройки аккаунта
          </h1>
          <p className={`${styles.greetings} ${gStyles.titleSmall}`}>
            Добро пожаловать, {name}
          </p>
        </div>
      </div>
    </div>
  );
}
