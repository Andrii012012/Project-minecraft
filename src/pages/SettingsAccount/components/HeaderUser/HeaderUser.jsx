import React from "react";
import "./headerUserStyle.css";
import "./headerUserMedia.css";

export default function HeaderUser(props) {
  let { avatar, name } = props;
  return (
    <div className="settings__header">
      <div className="settings__user">
        <div className="settings__avatar avatar">
          <img
            src={require(`../../../../assets/upload/avatars/${avatar}`)}
            alt="image"
          />
        </div>
        <div className="settings__body">
          <h1 className="settings__title title-section">Настройки аккаунта</h1>
          <p className="settings__greetings title-section">
            Добро пожаловать, {name}
          </p>
        </div>
      </div>
    </div>
  );
}
