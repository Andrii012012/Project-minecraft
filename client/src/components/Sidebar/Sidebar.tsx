import React from "react";
import styles from "./style.module.scss";
import iconUser from "../../assets/images/component/sidebar/sidebar-icon-user.svg";
import User from "./components/User/User";
import { SignIn } from "./components/SingIn/SignIn";
import Navigator from "./components/Navigator/Navigator";
import Monitoring from "./components/Monitoring/Monitoring";
import Social from "./components/Social/Social";
import { useAppSelector } from "../../hooks/useAppSelector";

export default function Sidebar(): JSX.Element {
  const data = useAppSelector(state => state.user);
  let dataUser = data.user;

  return (
    <aside className={styles.sidebar}>
      <div>
        <section className={styles.infoSection}>
          <div className={`${styles.sectionSign} ${styles.sectionSidebar}`}>
            <p className={styles.text}>
              <img className={styles.icon} src={iconUser} />
              {data.status === 'success'
                ? "Авторизация"
                : "Настройки аккаунта"}
            </p>
          </div>
          {(data.status === "idel" || data.status === 'rejected') ? (
            <SignIn />
          ) : (
            <User dataUser={dataUser} />
          )}
        </section>
        <Navigator />
        <Monitoring />
        <Social />
      </div>
    </aside>
  );
}


