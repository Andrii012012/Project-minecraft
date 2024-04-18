import React from "react";
import styles from "./style.module.scss";
import gStyles from '../../../../styles/style.module.scss';
import ButtonSend from "../../../../components/ui/ButtonSend/ButtonSend";
import { useState } from "react";
import { urlUpdata } from "../../../../configs/urls";
import ChangeUserList from "../../components/ChangeUserList/ChangeUserList";
import SetDescription from "../../components/SetDescription/SetDescription";
import { TFuncSend } from "../../../../interface/type";
import { NavigateFunction } from "react-router-dom";
import { IData } from "../../../../interface/interface";
import { ISettings } from "../../interface/interface";
import { TUserList } from "../../interface/type";

interface IProps {
  user: IData;
  onFuncSend: TFuncSend;
  goHome: NavigateFunction;
}

const CHANGE_USER_LIST: TUserList[] = [
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

export default function SettingsProfile(props: IProps): JSX.Element {
  let { user, onFuncSend, goHome } = props;

  const [settings, setSettings] = useState<ISettings>({
    avatar: "",
    skin: "",
    shortDescription: "",
  });

  async function onSubmitData(e: React.FormEvent) {
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
      className={styles.settings}
      action={urlUpdata}
      method="post"
      encType="multipart/form-data"
    >
      <div className={styles.wrapper}>
        <div>
          <ChangeUserList list={CHANGE_USER_LIST} setValue={setSettings} />
          <SetDescription
            options={"shortDescription"}
            setValue={setSettings}
            value={settings}
          />
        </div>
        <div className={styles.bodyBtn}>
          <ButtonSend className={`${styles.btn} ${gStyles.textMedium}`} text="Сохранить" />
        </div>
      </div>
    </form>
  );
}
