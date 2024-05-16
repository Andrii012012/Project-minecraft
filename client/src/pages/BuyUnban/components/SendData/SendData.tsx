import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../../styles/style.module.scss";
import ButtonSend from "../../../../components/ui/ButtonSend/ButtonSend";
import { IDataSend } from "../../interface/interface";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { callDateUser } from "../../../../features/user/user.";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import update from "../../../../features/utils/update";

interface IProps {
  url: string;
  id: string;
  data: IDataSend;
}

export default function SendData(props: IProps): JSX.Element {
  let { url, id, data } = props;

  const dispatch = useAppDispatch();
  const dataUser = useAppSelector(state => state.user);
  const statusUpdate = dataUser.status;
  const dataSignIn = dataUser.dataSingIn;
  
  async function onSendData(e: React.FormEvent) {
    e.preventDefault();
    const form = new FormData();
    form.append("id", id);
    form.append("server", data?.server!);
    form.append("serverId", data?.serverId!);
    form.append("costUnban", data?.price as keyof React.ReactNode);
    await dispatch(callDateUser({ method: 'post', url, form }));
    update(statusUpdate, {login: dataSignIn?.login || '', password: dataSignIn?.password || ''}, dispatch);
  }

  return (
    <form action={url} method="post" onSubmit={(e) => onSendData(e)}>
      <div className={styles.wrapper}>
        <ButtonSend
          className={`${styles.btn} ${gStyles.textMedium}`}
          text="Купить разбан"
        />
      </div>
    </form>
  );
}
