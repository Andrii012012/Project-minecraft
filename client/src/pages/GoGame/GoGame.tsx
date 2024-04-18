import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../styles/style.module.scss";
import imageMain from "../../assets/images/page/GoGame/go-game-image-main.jpg";
import Social from "../../components/ui/Social/Social";
import Step from "./components/Step/Step";
import { IPoints } from "./interface/interface";

import { DOWNLOADLAUNCHER_ROUTE, REGISTER_ROUTE } from "../../routers/routes";

const POINTS: IPoints[] = [
  {
    className: "registerAccount",
    title: "Зарегистрируйте аккаунт",
    to: REGISTER_ROUTE,
    text: "Регистрация",
    textPoint: "1",
    background: "seafoam-green",
    backgroundPoint: "coral",
  },
  {
    className: "downloadLauncher",
    title: "Скачайте лаунчер",
    to: DOWNLOADLAUNCHER_ROUTE,
    text: "Скачать",
    textPoint: "2",
    background: "lime-green",
    backgroundPoint: "lime-green",
  },
];

export default function GoGame(): JSX.Element {
  return (
    <main className={gStyles.page}>
      <section className={styles.goGame}>
        <div className={styles.header}>
          <img className={styles.image} src={imageMain} alt="" />
          <h1 className={`${styles.title} ${gStyles.titleBig}`}>
            Начни писать историю на нашем проекте!
          </h1>
        </div>
        <div className={`${styles.content} ${gStyles.containerContent}`}>
          <p className={`${styles.description} ${gStyles.descriptionMedium}`}>
            Добро пожаловать! Данный проект ещё свежый, но имеет огромную
            перспективу между крупными проектами, так как наша Команда очень
            старательно трудится днями и ночами. Заради чего? Чтобы наши игроки
            чуствовали себя как частью чего-то масштабного, чтобы наши игроки
            имели возможность качественно и главное с наслаждением играли на
            нашем проекте. Кто знает? Может именно ты станешь частью чего-то
            масштабного...
          </p>
          <ul className={styles.list}>
            <Step list={POINTS} />
          </ul>
          <Social />
        </div>
      </section>
    </main>
  );
}
