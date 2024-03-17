import React from "react";
import "./SideBar.css";
import "./SideBarMediaStyle.css";
import "../ui/field/field.css";
import { useState } from "react";
import { useContext } from "react";
import ListNav from "../ui/listNav/ListNav.jsx";
import { NavLink, Link } from "react-router-dom";
import { UserData } from "../../contexts/user";
import "../ui/button/ButtonNav.css";
import { urlBd } from "../../configs/urls";
import ButtonSend from "../../components/ui/buttonSend/ButtonSend";
import iconMonay from "../../assets/images/component/sidebar/sidebar-icon-monay.svg";
import iconMonitoring from "../../assets/images/component/sidebar/sidebar-icon-monitoring.svg";
import iconSocial from "../../assets/images/component/sidebar/sidebar-icon-social.svg";
import iconUser from "../../assets/images/component/sidebar/sidebar-icon-user.svg";
import discord from "../../assets/images/global/discord.svg";
import vk from "../../assets/images/global/vk.svg";
import iconUserPush from "../../assets/images/component/sidebar/sidebar-icon-user-push.svg";
import Field from "../ui/field/Field.jsx";

import {
  REGISTER_ROUTE,
  DOWNLOADLAUNCHER_ROUTE,
  QUESTIONS_ROUTE,
  TEAMPROJECT_ROUTE,
  SETTINGSACCOUNT_ROUTE,
  RECOVERY_ROUTE,
  PROFILE_ROUTE,
  CABINET_ROUTE,
  CABINET_PAY_ROUTE,
} from "../../routers/routes.jsx";

const SOCIAL_NETWORK = [
  {
    icon: vk,
    background: "#4e8ace",
    name: "Вконтакте",
  },
  {
    icon: discord,
    background: "#7289da",
    name: "Discord",
  },
];

const USER_ACCOUNT_NAVIGATOR_ITEMS = [
  {
    path: CABINET_ROUTE,
    text: "Личный кабинет",
  },
  {
    path: PROFILE_ROUTE,
    text: "Профиль",
  },
  {
    path: SETTINGSACCOUNT_ROUTE,
    text: "Настройки",
  },
];

const MENU_ITEM = [
  {
    path: DOWNLOADLAUNCHER_ROUTE,
    text: "Скачать лаунчер",
    href: null,
    target: null,
  },
  {
    path: QUESTIONS_ROUTE,
    text: "Вопросы и ответы",
    href: null,
    target: null,
  },
  {
    path: null,
    text: "Техническая поддержка",
    href: "https://vk.com/im?media=&sel=-224754509",
    target: "_blank",
  },
  {
    path: TEAMPROJECT_ROUTE,
    text: "Команда проекта",
    href: null,
    target: null,
  },
];

export default function SideBar() {
  const dataUser = useContext(UserData);
  const setDataUser = dataUser[0];
  let changeArrayDataUser = dataUser[1];
  let getArrayDataUser = dataUser[2];

  const stateServers = [
    { serverName: "TechnoMagic", maxPlayers: 100, playersNow: 32 },
  ];

  const [value, setValue] = useState({
    login: "",
    password: "",
  });

  async function sendData(e) {
    e.preventDefault();
    let form = new FormData();
    form.append("login", value.login);
    form.append("password", value.password);
    form.append("sign", true);
    setDataUser(urlBd, form);
  }

  return (
    <aside className="side-bar">
      <div className="side-bar__body">
        <section className="sign info-section">
          <div className="sign__name-section side-bar__name-section">
            <p className="sign__text">
              <img className="side-bar__icon" src={iconUser} />
              {!getArrayDataUser.isActive
                ? "Авторизация"
                : "Настройки аккаунта"}
            </p>
          </div>
          {!getArrayDataUser.isActive ? (
            <form
              action={urlBd}
              onSubmit={sendData}
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
          ) : (
            <div className="user">
              <div className="user__header">
                <div className="user__avatar avatar">
                  <img
                    src={require(`../../assets/upload/avatars/${getArrayDataUser.user.avatar}`)}
                    style={{ width: "80px", height: "80px" }}
                    alt=""
                  />
                </div>
                <div className="user__greetings">
                  <p className="user__text">Привет,</p>
                  <p className="user__name">{getArrayDataUser.user.login}</p>
                </div>
              </div>
              <div className="user__body-balance">
                <div className="user__icon-coins user-body__monay-section">
                  <img src={iconMonay} />
                </div>
                <div className="user__body-info-monay user-body__monay-section">
                  <p className="user__coins">
                    {getArrayDataUser.user.coins} руб
                  </p>
                  <Link
                    className="user__btn-monay"
                    style={{ color: "#fff" }}
                    to={CABINET_PAY_ROUTE}
                  >
                    Пополнить
                  </Link>
                </div>
                <div className="user__body-info-bonus user-body__monay-section">
                  <p className="user__coins">
                    {!getArrayDataUser.user.bonus && 0} Бонусы
                  </p>
                  <Link
                    className="user__btn-monay"
                    style={{ color: "#fff" }}
                    to={""}
                  >
                    Получить
                  </Link>
                </div>
              </div>
              <div className="user__navigator">
                <ul className="user__lists">
                  {USER_ACCOUNT_NAVIGATOR_ITEMS.map((item, _) => (
                    <ListNav
                      key={item.text}
                      path={item.path}
                      text={item.text}
                    />
                  ))}
                  <li className="item-nav">
                    <button
                      type="button"
                      className="user_btn"
                      onClick={() =>
                        changeArrayDataUser((getArrayDataUser.isActive = false))
                      }
                    >
                      Выйти
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </section>
        <section className="navigator info-section">
          <div className="side-bar__name-section">
            <div className="side-bar__layout-burger">
              <span></span>
            </div>
            <p className="navigator__text">Навигация</p>
          </div>
          <nav>
            <ul className="lists-items">
              {MENU_ITEM.map((item, _) => (
                <ListNav
                  path={item.path}
                  target={item.target}
                  href={item.href}
                  text={item.text}
                />
              ))}
            </ul>
          </nav>
        </section>
        <section className="monitoring info-section">
          <div className="side-bar__name-section">
            <img
              className="side-bar__icon"
              src={iconMonitoring}
              alt="monitoring"
            />
            <p className="navigator__text">Мониторинг</p>
          </div>
          <ul className="lists-items">
            {stateServers.map((item, index) => (
              <li key={index} className="item-nav">
                <p className="monitoring__server-name">{item.serverName}</p>
                <div className="monitoring__count-players">
                  <strong className="monitoring__state-players">
                    {item.playersNow} из {item.maxPlayers}
                  </strong>
                </div>
                <div className="monitoring__indicator-container">
                  <div
                    className="monitoring__indicator"
                    style={{ width: `${item.playersNow}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className="sidebar-social info-section">
          <div className="sidebar-social__name-section side-bar__name-section">
            <img
              className="sidebar-social__icon-social side-bar__icon"
              src={iconSocial}
              alt=""
            />
            <p className="navigator__text">Социальные сети</p>
          </div>
          <ul className="social-sidebar">
            {SOCIAL_NETWORK.map((item, index) => {
              return (
                <li
                  key={index}
                  style={{ backgroundColor: item.background }}
                  class="social-sidebar__item"
                >
                  <p className="social-sidebar__name-network">
                    <img
                      className="social-sidebar__network-icon"
                      src={item.icon}
                      alt=""
                    />
                    {item.name}
                  </p>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </aside>
  );
}
