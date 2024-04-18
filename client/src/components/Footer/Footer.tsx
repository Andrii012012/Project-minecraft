import React from "react";
import styles from "./style.module.scss";
import gStyles from '../../styles/style.module.scss';
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
import { IListMenu } from "./interface/interface";


const LIST_MENU: IListMenu[] = [
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

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={gStyles.container}>
        <div className={styles.body}>
          <Link className={styles.logo} to="/">
            <img src={logo} alt="" />
          </Link>
          <ListMenu list={LIST_MENU} />
        </div>
      </div>
    </footer>
  );
}
