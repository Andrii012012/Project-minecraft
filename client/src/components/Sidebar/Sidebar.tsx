import React from "react";
import styles from "./style.module.scss";
import { useContext } from "react";
import { UserData } from "../../contexts/user";
import iconUser from "../../assets/images/component/sidebar/sidebar-icon-user.svg";
import User from "./components/User/User";
import { SignIn } from "./components/SingIn/SignIn";
import Navigator from "./components/Navigator/Navigator";
import Monitoring from "./components/Monitoring/Monitoring";
import Social from "./components/Social/Social";
import { IDataControl, IObjectDataServer } from "../../interface/interface";
import { TFuncSend } from "../../interface/type";

export default function Sidebar(): JSX.Element {
  const dataUser: IDataControl | null = useContext(UserData);

  if (dataUser) {
    const setDataUser: TFuncSend = dataUser.setDataUser;
    let leave: () => void = dataUser.leave;

    let objectDataServer: IObjectDataServer = dataUser.data;

    return (
      <aside className={styles.sidebar}>
        <div>
          <section className={styles.infoSection}>
            <div className={`${styles.sectionSign} ${styles.sectionSidebar}`}>
              <p className={styles.text}>
                <img className={styles.icon} src={iconUser} />
                {!objectDataServer.isActive
                  ? "Авторизация"
                  : "Настройки аккаунта"}
              </p>
            </div>
            {!objectDataServer.isActive ? (
              <SignIn onFuncSend={setDataUser} />
            ) : (
              <User leave={leave} objectDataServer={objectDataServer} />
            )}
          </section>
          <Navigator />
          <Monitoring />
          <Social />
        </div>
      </aside>
    );
  } else {
    return <></>;
  }
}
