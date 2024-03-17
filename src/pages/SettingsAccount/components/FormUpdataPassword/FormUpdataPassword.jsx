import React from "react";
import "./formUpdataPasswordStyle.css";
import "./formUpdataPasswordMedia.css";
import { useState } from "react";
import BlockField from "../../../../components/ui/PointFieldGroup/PointFieldGroup";
import ButtonSend from "../../../../components/ui/ButtonSend/ButtonSend";

export default function FormUpdataPassword(props) {
  let { url, goHome, onFuncSend, dataUser } = props;

  const [valueField, setValueField] = useState({
    oldPassword: "",
    newPassword: "",
    repeatNewPassword: "",
  });

  async function onSubmitChagenData(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("id", dataUser.id);
    form.append("oldPassword", valueField.oldPassword);
    form.append("newPassword", valueField.newPassword);
    form.append("updata", true);
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
            <BlockField
              title="Введите старый пароль"
              number="1"
              type="password"
              name="old-password"
              background="#ff420e"
              valueField={valueField.oldPassword}
              setValueField={setValueField}
              changeThing="oldPassword"
            />
            <BlockField
              title="Введите новый пароль"
              number="2"
              type="password"
              name="new-password"
              background="#80bd9e"
              valueField={valueField.newPassword}
              setValueField={setValueField}
              changeThing="newPassword"
            />
            <BlockField
              title="Введите повторно новый пароль"
              number="3"
              type="password"
              name="repeat-new-password"
              background="#f98866"
              valueField={valueField.repeatNewPassword}
              setValueField={setValueField}
              changeThing="repeatNewPassword"
            />
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
