import React from "react";
import "./signinStyle.css";
import "./signinMedia.css";
import ButtonSend from "../../../ui/ButtonSend/ButtonSend";
import { NavLink } from "react-router-dom";
import Field from "../../../ui/Field/Field";
import { useState } from "react";
import { urlBd } from "../../../../configs/urls";
import { RECOVERY_ROUTE, REGISTER_ROUTE } from "../../../../routers/routes";

export default function SignIn(props) {
  let { onFuncSend } = props;

  const [value, setValue] = useState({
    login: "",
    password: "",
  });

  async function onSubmitData(e) {
    e.preventDefault();
    let form = new FormData();
    form.append("login", value.login);
    form.append("password", value.password);
    form.append("sign", true);
    onFuncSend(urlBd, form);
  }

  return (
    <form
      action={urlBd}
      onSubmit={onSubmitData}
      method="post"
      name="auth"
      className="form-sign"
    >
      <div className="from-sign__wrapper">
        <div className="form-sign__login">
          <Field
            className="form-sign__input-login form-sign__field"
            type="text"
            placeholder="Логин"
            name="login"
            value={value.login}
            setValue={setValue}
            field={"login"}
          />
        </div>
        <div className="form-sign__password">
          <Field
            className="form-sign__input-pass form-sign__field"
            type="password"
            placeholder="Пароль"
            name="password"
            value={value.password}
            setValue={setValue}
            field={"password"}
          />
        </div>
        <ButtonSend text="Войти" className="form-sign__btn-sign" />
        <div className="form-sign__body-btn">
          <NavLink
            className="sign-btn form-sign__btn-register sign-btn--seafoam-green"
            to={REGISTER_ROUTE}
          >
            Регистрация
          </NavLink>
          <NavLink
            to={RECOVERY_ROUTE}
            className="sign-btn form-sign__btn-recovery sign-btn--main-color"
          >
            Забыл пароль?
          </NavLink>
        </div>
      </div>
    </form>
  );
}
