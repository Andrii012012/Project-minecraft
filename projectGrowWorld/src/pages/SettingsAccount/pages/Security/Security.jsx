import React from "react";
import "./Security.css";
import "./SecurityMediaStyle.css";
import "../../../../components/ui/field/field.css";
import BlockField from "../../../../components/ui/BlockField/BlockField";
import { useState } from "react";
import ButtonSend from "../../../../components/ui/buttonSend/ButtonSend";
import { urlBd } from "../../../../configs/urls";
import { useNavigate } from "react-router-dom";

export default function Security(props) {
  let { user, funcPost } = props;

  let { login } =  user.user;

  const [valueField, setValueField] = useState({
    oldPassword: "",
    newPassword: "",
    repeatNewPassword: "",
  });

  const goHome = useNavigate();

  async function onSubmitChagenData(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("id", user.user.id);
    form.append("oldPassword", valueField.oldPassword);
    form.append("newPassword", valueField.newPassword);
    form.append("updata", true);
    let result = await funcPost(urlBd, form);
    if (result) {
      goHome("/");
      window.location.reload();
    }
  }

  return (
    <div className="security">
      <h2 className="security__title title">Настройки безопасности</h2>
      <section className="change-pass">
        <h3 className="security__title-section title-section">Смена пароля:</h3>
        <form
          onSubmit={onSubmitChagenData}
          action={urlBd}
          method="post"
          className="settings-security"
        >
          <div className="settings-security__wrapper">
            <ul className="settings-security__lists">
              <BlockField
                title="Введите старый пароль"
                number="1"
                type="password"
                name="old-password"
                background="#ff420e"
                valueField={valueField.oldPassword}
                setValueField={setValueField}
                changeThing="oldPassword"
              />
              <BlockField
                title="Введите новый пароль"
                number="2"
                type="password"
                name="new-password"
                background="#80bd9e"
                valueField={valueField.newPassword}
                setValueField={setValueField}
                changeThing="newPassword"
              />
              <BlockField
                title="Введите повторно новый пароль"
                number="3"
                type="password"
                name="repeat-new-password"
                background="#f98866"
                valueField={valueField.repeatNewPassword}
                setValueField={setValueField}
                changeThing="repeatNewPassword"
              />
            </ul>
            <div className="settings-security__body-btn">
              <ButtonSend
                className="settings-security__btn"
                text="Сменить пароль"
              />
            </div>
          </div>
        </form>
      </section>
      <section className="instructions">
        <h3 className="security__title-section title-section">Духвакторная защита:</h3>
        <p className="instructions__subtitle subtitle">
          Двухфакторная авторизация не позволит взломщикам войти под вашим
          аккаунтом, даже если они узнают ваш действующий пароль.
        </p>
        <p className="instructions__code">
        /protect <span>{login}</span>
        1542df07ad798504c05a1e6f44889
        f2bf571509db2cddc0868834aae712556a1
        </p>
        <div className="instructions__body-btn">
          <a className="instructions__btn" href="#">
            Бот Телеграм
          </a>
        </div>
      </section>
    </div>
  );
}
