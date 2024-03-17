import React from "react";
import "./Register.css";
import "./RegisterMediaStyle.css";
import imageMain from "../../assets/images/page/Register/register-image-main.png";
import incoFilling from "../../assets/images/global/icon-filling-data.svg";
import { useContext, useState } from "react";
import { UserData } from "../../contexts/user";
import { urlBd } from "../../configs/urls";
import ButtonSend from "../../components/ui/buttonSend/ButtonSend";
import { useNavigate } from "react-router-dom";
import BlockField from "../../components/ui/BlockField/BlockField";
import AccessClosed from "../../components/accessClosed/AccessClosed";
import { validation } from "../../utils/validation";

export default function Register(props) {
  const getMethodsUser = useContext(UserData);
  const setUser = getMethodsUser[0];
  const getHome = useNavigate();
  const [valueField, setValueField] = useState({
    login: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  async function setDataUser(e) {
    e.preventDefault();
    const dataForm = new FormData();
    dataForm.append("login", valueField.login);
    dataForm.append("email", valueField.email);
    dataForm.append("password", valueField.password);
    dataForm.append("date", new Date().getTime());
    dataForm.append("register", true);
    let result = validation(document.querySelectorAll(".register .field"));
    if (result) {
      setUser(urlBd, dataForm);
    }
  }

  if (!getMethodsUser[2].isActive) {
    return (
      <main className="page">
        <section className="register">
          <div className="register__header">
            <div className="register__image">
              <img src={imageMain} alt="" />
            </div>
            <div className="register__body">
              <img className="register__icon" src={incoFilling} />
              <div className="register__body-info">
                <h1 className="register__title title">Регистрация</h1>
                <p className="register__subtitle subtitle">
                  Впишитесь в нашу общую историю!
                </p>
              </div>
            </div>
          </div>
          <div className="register__content container-content">
            <form
              onSubmit={setDataUser}
              className="form-register"
              active={urlBd}
              method="post"
            >
              <ul className="form-register__lists">
                <BlockField
                  title="Придумайте логин"
                  number="1"
                  text="Логин - ваш игровой ник, от 4 до 16 символов"
                  type="text"
                  name="login"
                  background="#ff420e"
                  valueField={valueField.login}
                  setValueField={setValueField}
                  changeThing="login"
                />
                <BlockField
                  title="Введите ваш Email"
                  number="2"
                  text="Служит для сохранности и восстановления аккаунта"
                  type="text"
                  name="email"
                  background="#80bd9e"
                  valueField={valueField.email}
                  setValueField={setValueField}
                  changeThing="email"
                />
                <BlockField
                  title="Придумайте пароль"
                  number="3"
                  text="Чем больше и сложнее пароль тем лучше"
                  type="password"
                  name="password"
                  background="#f98866"
                  valueField={valueField.password}
                  setValueField={setValueField}
                  changeThing="password"
                />
                <BlockField
                  title="Повторите пароль"
                  number="4"
                  text="Убедитесь в том что пароль действительно ввели правильно"
                  type="password"
                  name="repeatPassword"
                  background="#89da59"
                  valueField={valueField.repeatPassword}
                  changeThing="repeatPassword"
                  setValueField={setValueField}
                />
              </ul>
              <div className="form-register__send">
                <p className="form-register__agree text">
                  Регистрируясь на нашем проекте, вы{" "}
                  <span>автоматически соглашаетесь с игровыми правилами</span> и
                  пользовательским соглашением.
                </p>
                <ButtonSend
                  className="form-register__btn"
                  text="Зарегистрируваться"
                />
              </div>
            </form>
          </div>
        </section>
      </main>
    );
  } else {
    return <AccessClosed userHeader={false} />;
  }
}
