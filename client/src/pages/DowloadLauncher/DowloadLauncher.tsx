import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../styles/style.module.scss";
import windows from "../../assets/images/global/system-w.png";
import linux from "../../assets/images/global/system-l.png";
import Social from "../../components/ui/Social/Social";

export default function DowloadLauncher(): JSX.Element {
  return (
    <main className={gStyles.page}>
      <section
        className={`${styles.downloadLauncher} ${gStyles.containerContent}`}
      >
        <h1 className={`${styles.title} ${gStyles.titleBig}`}>
          Скачать лаунчер Майнкрафт
        </h1>
        <p className={`${styles.subtitle} ${gStyles.descriptionMedium}`}>
          Для игры на наших серверах требуется наш лаунчер с модами для
          Minecraft, без него невозможно зайти на наши сервера.
        </p>
        <p className={`${styles.description} ${gStyles.descriptionMedium}`}>
          Лаунчер - это программа запуска наших игровых клиентов, эта программа
          автоматически загружает нужные модификации и обновления наших сборок
          Minecraft и позволяет быстро заходить на наши сервера без лишних
          действий.
        </p>
        <h2 className={styles.choose}>Выбирете систему:</h2>
        <div className={styles.bodySystemChoose}>
          <div className={styles.system}>
            <img src={windows} alt="" />
            <p className={styles.nameSystem}>windows</p>
          </div>
          <div className={styles.system}>
            <img src={linux} alt="" />
            <p className={styles.nameSystem}>Linux</p>
          </div>
        </div>
        <Social />
      </section>
    </main>
  );
}
