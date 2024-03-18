import React from "react";
import "./settingsAccountStyle.css";
import "./settingsAccountMedia.css";
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

export default function SettingsAccount(props) {
  const contextDataUser = useContext(UserData);
  const data = contextDataUser[2];
  const loading = data.loading;
  const dataUser = data.user;
  const onFuncSend = contextDataUser[0];

  const goHome = useNavigate();

  const mains = [
    { text: "Настройки аккаунта", image: safety, path: SETTINGS_PROFILE },
    { text: "Безопасность", image: lock, path: SECURITY },
  ];

  if (loading) {
    let { login: name = "name", avatar } = dataUser;
    return (
      <main className="page">
        <section className="settings">
          <HeaderUser avatar={avatar} name={name} />
          <div className="settings-profile__content container-content">
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
  }
}
