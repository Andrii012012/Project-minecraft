import React from "react";
import "./sideBarStyle.css";
import "./sideBarMedia.css";
import { useContext } from "react";
import { UserData } from "../../contexts/user";
import iconUser from "../../assets/images/component/sidebar/sidebar-icon-user.svg";
import User from "./components/User/User.jsx";
import SignIn from "./components/SingIn/SignIn.jsx";
import Navigator from "./components/Navigator/Navigator.jsx";
import Monitoring from "./components/Monitoring/Monitoring.jsx";
import Social from "./components/Social/Social.jsx";

export default function SideBar() {
  const dataUser = useContext(UserData);
  const onFuncSend = dataUser[0];
  let changeArrayDataUser = dataUser[1];
  let getArrayDataUser = dataUser[2];

  return (
    <aside className="side-bar">
      <div className="side-bar__body">
        <section className="sign info-section">
          <div className="sign__name-section side-bar__name-section">
            <p className="sign__text">
              <img className="side-bar__icon" src={iconUser} />
              {!getArrayDataUser.isActive
                ? "Авторизация"
                : "Настройки аккаунта"}
            </p>
          </div>
          {!getArrayDataUser.isActive ? (
            <SignIn onFuncSend={onFuncSend} />
          ) : (
            <User
              leave={changeArrayDataUser}
              getArrayDataUser={getArrayDataUser}
            />
          )}
        </section>
        <Navigator />
        <Monitoring />
        <Social />
      </div>
    </aside>
  );
}
