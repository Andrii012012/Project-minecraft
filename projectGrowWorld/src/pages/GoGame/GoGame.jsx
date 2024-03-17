import React from "react";
import "./GoGame.css";
import './GoGameMediaStyle.css';
import imageMain from '../../assets/images/page/GoGame/go-game-image-main.jpg';
import Point from "../../components/ui/point/Point.jsx";
import ButtonNav from "../../components/ui/button/ButtonNav.jsx";
import Social from "../../components/ui/social/Social.jsx";

import {
  DOWNLOADLAUNCHER_ROUTE,
  REGISTER_ROUTE,
} from "../../routers/routes.jsx";

export default function GoGame(props) {
  let {} = props;
  return (
    <main className="page">
      <section className="go-game">
        <div className="go-game__header">
          <img className='go-game__image' src={imageMain} alt="" />
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
            <li className="go-game__item">
              <Point
                className="go-game__point"
                text="1"
                background="var(--main-color)"
              />
              <div className="go-game__register">
                <p className="go-game__text title-section">Зарегистрируйте аккаунт</p>
                <ButtonNav
                  className="go-game__btn go-game__register-account"
                  path={REGISTER_ROUTE}
                  text="Зарегистрация"
                />
              </div>
            </li>
            <li className="go-game__item">
              <Point
                className="go-game__point"
                text="2"
                background="var(--coral)"
              />
              <div className="go-game__register">
                <p className="go-game__text title-section">Скачайте лаунчер</p>
                <ButtonNav
                  className="go-game__btn go-game__download-launcher"
                  path={DOWNLOADLAUNCHER_ROUTE}
                  text="Скачать"
                  background="#89da59"
                />
              </div>
            </li>
          </ul>
          <Social />
        </div>
      </section>
    </main>
  );
}
