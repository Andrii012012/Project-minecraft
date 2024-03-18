import React from "react";
import "./sendDataStyle.css";
import { validation } from "../../../../utils/validation";
import ButtonSend from "../../../../components/ui/ButtonSend/ButtonSend";
import PointFieldGroup from "../../../../components/ui/PointFieldGroup/PointFieldGroup";
import { useState } from "react";
import PointFieldFilling from "../../../../components/ui/PointFieldFilling/PointFieldFilling";

export default function SendData(props) {
  let { onFundSend, url, goHome } = props;

  const [valueField, setValueField] = useState({
    login: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  async function onSubmitData(e) {
    e.preventDefault();
    const dataForm = new FormData();
    dataForm.append("login", valueField.login);
    dataForm.append("email", valueField.email);
    dataForm.append("password", valueField.password);
    dataForm.append("date", new Date().getTime());
    dataForm.append("register", true);
    let result = validation(document.querySelectorAll(".register .field"));
    if (result) {
      onFundSend(url, dataForm);
      goHome("/");
      window.location.reload();
    }
  }

  return (
    <form
      onSubmit={onSubmitData}
      className="form-register"
      active={url}
      method="post"
    >
      <ul className="form-register__lists">
        <PointFieldGroup number="1" background={`var(--main-color)`}>
          <PointFieldFilling
            type="text"
            name="login"
            number="1"
            value={valueField}
            setValue={setValueField}
            changeKey={"login"}
            title="Придумайте логин"
            subtitle="Логин - ваш игровой ник, от 4 до 16 символов"
          />
        </PointFieldGroup>
        <PointFieldGroup number="2" background={`var(--seafoam-green)`}>
          <PointFieldFilling
            type="text"
            name="email"
            number="2"
            value={valueField}
            setValue={setValueField}
            changeKey={"email"}
            title="Введите ваш Email"
            subtitle="Служит для сохранности и восстановления аккаунта"
          />
        </PointFieldGroup>
        <PointFieldGroup number="3" background={`var(--coral)`}>
          <PointFieldFilling
            type="password"
            name="password"
            number="3"
            value={valueField}
            setValue={setValueField}
            changeKey={"password"}
            title="Придумайте пароль"
            subtitle="Чем больше и сложнее пароль тем лучше"
          />
        </PointFieldGroup>
        <PointFieldGroup number="4" background={`var(--lime-green)`}>
          <PointFieldFilling
            type="password"
            name="repeatPassword"
            number="4"
            value={valueField}
            setValue={setValueField}
            changeKey={"repeatPassword"}
            title="Повторите пароль"
            subtitle="Убедитесь в том что пароль действительно ввели правильно"
          />
        </PointFieldGroup>
      </ul>
      <div className="form-register__send">
        <p className="form-register__agree text">
          Регистрируясь на нашем проекте, вы{" "}
          <span>автоматически соглашаетесь с игровыми правилами</span> и
          пользовательским соглашением.
        </p>
        <ButtonSend className="form-register__btn" text="Зарегистрируваться" />
      </div>
    </form>
  );
}
