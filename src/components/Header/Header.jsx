import React, { useRef } from "react";
import "./headerStyle.css";
import "./headerMedia.css";
import "../ui/ButtonNav/ButtonNav";
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
import ListMenu from "./components/ListMenu/ListMenu.jsx";

const listMenu = [
  {
    name: "Форум",
    icon: iconForum,
    to: "/",
  },
  {
    name: "Правила",
    icon: iconRules,
    to: RULES_ROUTE,
  },
  {
    name: "Донат",
    icon: iconDonate,
    to: OPPORTUNITY_PRIVILEGE_ROUTE,
  },
  {
    name: "Сервера",
    icon: iconServers,
    to: SERVERS_ROUTE,
  },
];

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
              <ListMenu list={listMenu} hungleClick={onCloseBurger} />
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
