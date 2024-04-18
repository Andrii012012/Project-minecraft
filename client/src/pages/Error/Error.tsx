import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../styles/style.module.scss";
import errorImageMain from "../../assets/images/global/404.png";

export default function Error(): JSX.Element {
  return (
    <main className={gStyles.page}>
      <section className={styles.error}>
        <img className={styles.image} src={errorImageMain} alt="" />
        <p className={`${styles.title} ${gStyles.titleBig}`}>
          Страница не найдена!
        </p>
      </section>
    </main>
  );
}
