import React, { useState } from "react";
import gStyles from "../../styles/style.module.scss";
import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import iconForum from "../../assets/images/global/icon-forum.png";
import iconRules from "../../assets/images/global/icon-rules.png";
import iconDonate from "../../assets/images/global/icon-donate.png";
import iconServers from "../../assets/images/global/icon-servers.png";
import {
  RULES_ROUTE,
  GOGOME_ROUTE,
  SERVERS_ROUTE,
  OPPORTUNITY_PRIVILEGE_ROUTE,
} from "../../routers/routes";
import logo from "../../assets/images/global/logo.svg";
import ListMenu from "./components/ListMenu/ListMenu";

type TListMenu = Record<"name" | "icon" | "to", string>;

const listMenu: TListMenu[] = [
  {
    name: "Форум",
    icon: iconForum,
    to: "forum",
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

const Header = (): JSX.Element => {
  const [burger, setBurger] = useState<boolean>(false);
  const burgerRef = useRef<HTMLDivElement>(null);

  function onActiveBurger(): void {
    setBurger((): boolean => {
      if (!burger) {
        burgerRef.current?.classList.add(styles.activeBurger);
        document.body.style.overflow = "hidden"!;
        return true;
      } else {
        burgerRef.current?.classList.remove(styles.activeBurger);
        document.body.style.overflow = "auto"!;
        return false;
      }
    });
  }

  function onCloseBurger(): void {
    if (burgerRef.current) {
      burgerRef.current.classList.remove(styles.activeBurger);
      document.body.style.overflow = "auto"!;
    }
  }

  return (
    <header className={styles.header}>
      <div className={gStyles.container}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <NavLink onClick={onCloseBurger} to="/">
              <img src={logo} />
            </NavLink>
          </div>
          <div
            ref={burgerRef}
            className={styles.burger}
            onClick={onActiveBurger}
          >
            <span></span>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <ListMenu list={listMenu} hungleClick={onCloseBurger} />
            </ul>
            <NavLink
              onClick={onCloseBurger}
              to={GOGOME_ROUTE}
              className={styles.btn}
            >
              Начать игру
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
