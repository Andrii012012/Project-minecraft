import React from "react";
import "./navigatorStyle.css";
import "./navigatorMedia.css";
import ListNav from "../../../ui/ListNav/ListNav.jsx";

import {
  DOWNLOADLAUNCHER_ROUTE,
  QUESTIONS_ROUTE,
  TEAMPROJECT_ROUTE,
} from "../../../../routers/routes.jsx";

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

export default function Navigator(props) {
  let {} = props;
  return (
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
  );
}
