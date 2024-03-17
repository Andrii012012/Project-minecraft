import React from "react";
import "./goGameStyle.css";
import "./goGameMedia.css";
import imageMain from "../../assets/images/page/GoGame/go-game-image-main.jpg";
import Social from "../../components/ui/Social/Social.jsx";
import Step from "./components/Step/Step.jsx";

import {
  DOWNLOADLAUNCHER_ROUTE,
  REGISTER_ROUTE,
} from "../../routers/routes.jsx";

const POINTS = [
  {
    className: "go-game__register-account",
    title: "Зарегистрируйте аккаунт",
    to: REGISTER_ROUTE,
    text: "Регистрация",
    textPoint: "1",
    background: "var(--seafoam-green)",
    backgroundPoint: "var(--coral)",
  },
  {
    className: "go-game__download-launcher",
    title: "Скачайте лаунчер",
    to: DOWNLOADLAUNCHER_ROUTE,
    text: "Скачать",
    textPoint: "2",
    background: "var(--lime-green)",
    backgroundPoint: "var(--lime-green)",
  },
];

export default function GoGame(props) {
  let {} = props;
  return (
    <main className="page">
      <section className="go-game">
        <div className="go-game__header">
          <img className="go-game__image" src={imageMain} alt="" />
          <h1 className="go-game__title title">
            Начни писать историю на нашем проекте!
          </h1>
        </div>
        <div className="go-game__content container-content">
          <p className="go-game__description description--size-big">
            Добро пожаловать! Данный проект ещё свежый, но имеет огромную
            перспективу между крупными проектами, так как наша Команда очень
            старательно трудится днями и ночами. Заради чего? Чтобы наши игроки
            чуствовали себя как частью чего-то масштабного, чтобы наши игроки
            имели возможность качественно и главное с наслаждением играли на
            нашем проекте. Кто знает? Может именно ты станешь частью чего-то
            масштабного...
          </p>
          <ul className="go-game__lists">
            <Step list={POINTS} />
          </ul>
          <Social />
        </div>
      </section>
    </main>
  );
}
