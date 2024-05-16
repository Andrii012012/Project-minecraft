import React from "react";
import styles from "./style.module.scss";
import gStyles from '../../../../styles/style.module.scss';
import ButtonSend from "../../../../components/ui/ButtonSend/ButtonSend";
import { useState } from "react";
import { urlSignBD, urlUpdata } from "../../../../configs/urls";
import ChangeUserList from "../../components/ChangeUserList/ChangeUserList";
import SetDescription from "../../components/SetDescription/SetDescription";
import { IData } from "../../../../interface/interface";
import { ISettings } from "../../interface/interface";
import { TUserList } from "../../interface/type";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { callDateUser, updateUser } from "../../../../features/user/user.";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import update from "../../../../features/utils/update";

interface IProps {
  user: IData;
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
  let { user } = props;

  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.user);
  const statusUpdate = data.status;
  const dataSignIn = data.dataSingIn;

  const [settings, setSettings] = useState<ISettings>({
    avatar: {},
    skin: {},
    shortDescription: '',
  });


  async function onSubmitData(e: React.FormEvent) {
    e.preventDefault();
    if (settings && settings.avatar) {

      const form = new FormData();
      form.append("id", user.id);
      form.append("avatar", settings.avatar as keyof object);
      form.append("skin", settings.skin as keyof object);
      form.append("shortDescription", settings.shortDescription);
      await dispatch(updateUser({ method: 'post', url: urlUpdata, form }));
      update(statusUpdate, {login: dataSignIn?.login || '', password: dataSignIn?.password || ''}, dispatch);
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
