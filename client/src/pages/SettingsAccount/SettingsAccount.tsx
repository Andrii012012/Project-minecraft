import styles from "./style.module.scss";
import gStyles from "../../styles/style.module.scss";
import { Route, Routes } from "react-router-dom";
import Security from "./pages/Security/Security";
import SettingsProfile from "./pages/SettingsProfile/SettingsProfile";
import lock from "../../assets/images/page/SettingsAccount/setting-account-icon-lock.svg";
import safety from "../../assets/images/page/SettingsAccount/setting-account-icon-safety.svg";
import Sections from "./components/Sections/Sections";
import HeaderUser from "./components/HeaderUser/HeaderUser";
import { SECURITY, SETTINGS_PROFILE } from "./routes/routes";
import { TMains } from "./interface/type";
import { useAppSelector } from "../../hooks/useAppSelector";

export default function SettingsAccount(): JSX.Element {
  const data = useAppSelector(state => state.user);

  const mains: TMains[] = [
    { text: "Настройки аккаунта", image: safety, path: SETTINGS_PROFILE },
    { text: "Безопасность", image: lock, path: SECURITY },
  ];

  if (data.user) {
    const dataUser = data.user!;

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
                  />
                }
              />
              <Route
                path={SECURITY}
                element={
                  <Security
                    user={dataUser}
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
