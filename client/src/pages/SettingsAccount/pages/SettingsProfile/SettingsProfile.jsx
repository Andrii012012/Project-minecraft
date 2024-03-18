import React from "react";
import "./settingsProfileStyle.css";
import "./settingsProfileMedia.css";
import ButtonSend from "../../../../components/ui/ButtonSend/ButtonSend";
import { useState } from "react";
import { urlUpdata } from "../../../../configs/urls";
import ChangeUserList from "../../components/ChangeUserList/ChangeUserList";
import SetDescription from "../../components/SetDescription/SetDescription";

const CHANGE_USER_LIST = [
  {
    title: "Сменить аватарку",
    description:
      "Аватарка должны быть не меньше 80x80px для адекватной отрисовки",
    change: "avatar",
    name: "avatar",
  },
  {
    title: "Сменить скин",
    description: "Абсолютно всем доступны все виды скинов для установки!",
    change: "skin",
    name: "skin",
  },
];

export default function SettingsProfile(props) {
  let { user, onFuncSend, goHome } = props;

  const [settings, setSettings] = useState({
    avatar: "",
    skin: "",
    shortDescription: "",
  });

  async function onSubmitData(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("id", user.id);
    form.append("avatar", settings.avatar);
    form.append("skin", settings.skin);
    form.append("shortDescription", settings.shortDescription);
    let result = await onFuncSend(urlUpdata, form);
    if (result) {
      goHome("/");
      window.location.reload();
    }
  }

  return (
    <form
      onSubmit={onSubmitData}
      className="settings-profile"
      action={urlUpdata}
      method="post"
      encType="multipart/form-data"
    >
      <div className="settings-profile__wrapper">
        <div className="setting-profile__content">
          <ChangeUserList list={CHANGE_USER_LIST} setValue={setSettings} />
          <SetDescription
            options={"shortDescription"}
            setValue={setSettings}
            value={settings}
          />
        </div>
        <div className="settings-profile__body-btn">
          <ButtonSend className="settings-profile__btn" text="Сохранить" />
        </div>
      </div>
    </form>
  );
}
