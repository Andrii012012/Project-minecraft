import React from "react";
import "./footerStyle.css";
import "./footerMedia.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/global/logo.svg";
import {
  GOGOME_ROUTE,
  REGISTER_ROUTE,
  TEAMPROJECT_ROUTE,
  DOWNLOADLAUNCHER_ROUTE,
  RULES_ROUTE,
} from "../../routers/routes";
import ListMenu from "./components/ListMenu/ListMenu";

const LIST_MENU = [
  {
    title: "Полезная информация:",
    item: [
      {
        name: "Как начать игру",
        path: GOGOME_ROUTE,
      },
      {
        name: "cкачать лаунчер",
        path: DOWNLOADLAUNCHER_ROUTE,
      },
      { name: "Регистрация", path: REGISTER_ROUTE },
      { name: "Наша команда", path: TEAMPROJECT_ROUTE },
    ],
  },
  {
    title: "Полезные ссылки:",
    item: [
      {
        name: "Правила игры",
        path: RULES_ROUTE,
      },
    ],
  },
];

export default function Footer(props) {
  let {} = props;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__body">
          <Link className="footer__logo" to="/">
            <img src={logo} alt="" />
          </Link>
          <ListMenu list={LIST_MENU} />
        </div>
      </div>
    </footer>
  );
}
