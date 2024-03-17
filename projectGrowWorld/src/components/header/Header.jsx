import React, { useRef } from "react";
import "./Header.css";
import "./HeaderMediaStyle.css";
import "../ui/button/ButtonNav.css";
import { NavLink } from "react-router-dom";
import iconForum from "../../assets/images/global/icon-forum.png";
import iconRules from "../../assets/images/global/icon-rules.png";
import iconDonate from "../../assets/images/global/icon-donate.png";
import iconServers from "../../assets/images/global/icon-servers.png";
import {
  RULES_ROUTE,
  GOGOME_ROUTE,
  SERVERS_ROUTE,
  OPPORTUNITY_PRIVILEGE_ROUTE,
} from "../../routers/routes.jsx";
import logo from "../../assets/images/global/logo.svg";

export default function Header(props) {
  const burgerRef = useRef(null);

  function onActiveBurger() {
    if (burgerRef.current) {
      burgerRef.current.classList.toggle("active-burger");
    }
  }

  function onCloseBurger() {
    if (burgerRef.current) {
      burgerRef.current.classList.remove("active-burger");
    }
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <div className="header__logo">
            <NavLink onClick={onCloseBurger} to="/">
              <img src={logo} />
            </NavLink>
          </div>
          <div ref={burgerRef} className="burger" onClick={onActiveBurger}>
            <span></span>
          </div>
          <nav className="header__nav">
            <ul className="header__lists">
              <li className="header__item">
                <NavLink
                  onClick={onCloseBurger}
                  className="header__item-navigator"
                  to="/"
                >
                  <img className="header__item-icon" src={iconForum} alt="" />
                  <p>Форум</p>
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink
                  onClick={onCloseBurger}
                  className="header__item-navigator"
                  to={RULES_ROUTE}
                >
                  <img className="header__item-icon" src={iconRules} alt="" />
                  <p>Правила</p>
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink
                  className="header__item-navigator"
                  to={OPPORTUNITY_PRIVILEGE_ROUTE}
                  onClick={onCloseBurger}
                >
                  <img className="header__item-icon" src={iconDonate} alt="" />
                  <p>Донат</p>
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink
                  onClick={onCloseBurger}
                  className="header__item-navigator"
                  to={SERVERS_ROUTE}
                >
                  <img className="header__item-icon" src={iconServers} alt="" />
                  <p>Сервера</p>
                </NavLink>
              </li>
            </ul>
            <NavLink
              onClick={onCloseBurger}
              to={GOGOME_ROUTE}
              className="header__btn button-nav"
            >
              Начать игру
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
