import React from "react";
import "./formUpdataPasswordStyle.css";
import "./formUpdataPasswordMedia.css";
import { useState } from "react";
import PointFieldGroup from "../../../../components/ui/PointFieldGroup/PointFieldGroup";
import PointFieldFilling from "../../../../components/ui/PointFieldFilling/PointFieldFilling";
import ButtonSend from "../../../../components/ui/ButtonSend/ButtonSend";

export default function FormUpdataPassword(props) {
  let { url, goHome, onFuncSend, id } = props;

  const [valueField, setValueField] = useState({
    oldPassword: "",
    newPassword: "",
    repeatNewPassword: "",
  });

  async function onSubmitChagenData(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("id", id);
    form.append("oldPassword", valueField.oldPassword);
    form.append("newPassword", valueField.newPassword);
    let result = await onFuncSend(url, form);
    if (result) {
      goHome("/");
      window.location.reload();
    }
  }

  return (
    <section className="change-pass">
      <h3 className="security__title-section title-section">Смена пароля:</h3>
      <form
        onSubmit={onSubmitChagenData}
        action={url}
        method="post"
        className="settings-security"
      >
        <div className="settings-security__wrapper">
          <ul className="settings-security__lists">
            <PointFieldGroup number="1" background="#ff420e">
              <PointFieldFilling
                title="Введите старый пароль"
                type="password"
                name="old-password"
                value={valueField.oldPassword}
                setValue={setValueField}
                changeKey="oldPassword"
              />
            </PointFieldGroup>
            <PointFieldGroup number="2" background="#80bd9e">
              <PointFieldFilling
                title="Введите новый пароль"
                type="password"
                name="new-password"
                value={valueField.newPassword}
                setValue={setValueField}
                changeKey="newPassword"
              />
            </PointFieldGroup>
            <PointFieldGroup number="3" background="#f98866">
              <PointFieldFilling
                title="Введите повторно новый пароль"
                type="password"
                name="repeat-new-password"
                value={valueField.repeatNewPassword}
                setValue={setValueField}
                changeKey="repeatNewPassword"
              />
            </PointFieldGroup>
          </ul>
          <div className="settings-security__body-btn">
            <ButtonSend
              className="settings-security__btn"
              text="Сменить пароль"
            />
          </div>
        </div>
      </form>
    </section>
  );
}
