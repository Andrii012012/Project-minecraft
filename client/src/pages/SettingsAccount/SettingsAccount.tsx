import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../styles/style.module.scss";
import { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { UserData } from "../../contexts/user";
import Security from "./pages/Security/Security";
import SettingsProfile from "./pages/SettingsProfile/SettingsProfile";
import lock from "../../assets/images/page/SettingsAccount/setting-account-icon-lock.svg";
import safety from "../../assets/images/page/SettingsAccount/setting-account-icon-safety.svg";
import Sections from "./components/Sections/Sections";
import HeaderUser from "./components/HeaderUser/HeaderUser";
import { SECURITY, SETTINGS_PROFILE } from "./routes/routes";
import { IDataControl } from "../../interface/interface";
import { TMains } from "./interface/type";

export default function SettingsAccount(): JSX.Element {
  const contextDataUser = useContext<IDataControl | null>(UserData);
  const loading = contextDataUser?.data?.loading;

  const goHome = useNavigate();

  const mains: TMains[] = [
    { text: "Настройки аккаунта", image: safety, path: SETTINGS_PROFILE },
    { text: "Безопасность", image: lock, path: SECURITY },
  ];

  if (loading && contextDataUser && contextDataUser.data) {
    const data = contextDataUser.data;
    const dataUser = data.user!;
    const onFuncSend = contextDataUser.setDataUser;

    let { login: name = "name", avatar } = dataUser;
    return (
      <main className={gStyles.page}>
        <section className={styles.settings}>
          <HeaderUser avatar={avatar} name={name} />
          <div className={`${styles.content} ${gStyles.containerContent}`}>
            <Sections list={mains} />
            <Routes>
              <Route
                path={SETTINGS_PROFILE}
                element={
                  <SettingsProfile
                    user={dataUser}
                    onFuncSend={onFuncSend}
                    goHome={goHome}
                  />
                }
              />
              <Route
                path={SECURITY}
                element={
                  <Security
                    onFuncSend={onFuncSend}
                    user={dataUser}
                    goHome={goHome}
                  />
                }
              />
            </Routes>
          </div>
        </section>
      </main>
    );
  } else {
    return <></>;
  }
}
