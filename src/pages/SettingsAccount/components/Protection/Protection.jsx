import React from "react";
import "./protectionStyle.css";
import "./protectionMedia.css";

export default function Protection(props) {
  let { name } = props;
  return (
    <section className="instructions">
      <h3 className="security__title-section title-section">
        Духвакторная защита:
      </h3>
      <p className="instructions__subtitle subtitle">
        Двухфакторная авторизация не позволит взломщикам войти под вашим
        аккаунтом, даже если они узнают ваш действующий пароль.
      </p>
      <p className="instructions__code">
        /protect <span>{name}</span>
        1542df07ad798504c05a1e6f44889 f2bf571509db2cddc0868834aae712556a1
      </p>
      <div className="instructions__body-btn">
        <a className="instructions__btn" href="#">
          Бот Телеграм
        </a>
      </div>
    </section>
  );
}
