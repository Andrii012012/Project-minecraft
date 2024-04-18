import React from "react";
import styles from "./style.module.scss";
import pStyles from "../../style.module.scss";
import gStyles from '../../../../styles/style.module.scss';
import ListNav from "../../../ui/ListNav/ListNav";
import {
  DOWNLOADLAUNCHER_ROUTE,
  QUESTIONS_ROUTE,
  TEAMPROJECT_ROUTE,
} from "../../../../routers/routes";

interface IMenu {
  path?: string;
  text: string;
  href?: string;
  target?: string;
}

const MENU_ITEM: Array<IMenu> = [
  {
    path: DOWNLOADLAUNCHER_ROUTE,
    text: "Скачать лаунчер",
  },
  {
    path: QUESTIONS_ROUTE,
    text: "Вопросы и ответы",
  },
  {
    text: "Техническая поддержка",
    href: "https://vk.com/im?media=&sel=-224754509",
    target: "_blank",
  },
  {
    path: TEAMPROJECT_ROUTE,
    text: "Команда проекта",
  },
];

export default function Navigator(): JSX.Element {
  return (
    <section className={pStyles.sectionSidebarBody}>
      <div className={pStyles.sectionSidebar}>
        <div className={styles.burger}>
          <span></span>
        </div>
        <p>Навигация</p>
      </div>
      <nav>
        <ul className={styles.list}>
          {MENU_ITEM.map((item, _) => (
            <ListNav
              className={gStyles.textMedium}
              key={item.text}
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
