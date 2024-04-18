import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../../styles/style.module.scss";

export default function Protection(props: { name: string }): JSX.Element {
  let { name } = props;
  return (
    <section className={styles.instructions}>
      <h3 className={`${gStyles.sectionName} ${styles.titleProtection}`}>
        Духвакторная защита:
      </h3>
      <p className={`${gStyles.textSmall} ${styles.subtitle}`}>
        Двухфакторная авторизация не позволит взломщикам войти под вашим
        аккаунтом, даже если они узнают ваш действующий пароль.
      </p>
      <p className={styles.code}>
        /protect <span>{name}</span>
        1542df07ad798504c05a1e6f44889 f2bf571509db2cddc0868834aae712556a1
      </p>
      <div className={styles.bodyBtn}>
        <a className={styles.btn} href="#">
          Бот Телеграм
        </a>
      </div>
    </section>
  );
}
