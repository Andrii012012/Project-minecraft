import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../../styles/style.module.scss";
import ButtonSend from "../../../../components/ui/ButtonSend/ButtonSend";
import { IData } from "../../../../interface/interface";
import { IExchange } from "../../interface/interface";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { callDateUser } from "../../../../features/user/user.";
import update from "../../../../features/utils/update";
import { useAppSelector } from "../../../../hooks/useAppSelector";

interface IProps {
  url: string;
  data: IData | null;
  value: IExchange;
}

export default function SendData(props: IProps): JSX.Element {
  let { url, data, value } = props;

  const dispatch = useAppDispatch();
  const dataUser = useAppSelector(state => state.user);
  const statusUpdate = dataUser.status;
  const dataSignIn = dataUser.dataSingIn;

  if (data) {
    const { id, coins } = data;
    async function onSubmitData(e: React.FormEvent) {
      e.preventDefault();
      const form = new FormData();
      form.append("id", id);
      form.append("coins", value.bonus as keyof React.ReactNode);
      form.append("monay", coins);
      form.append("minusMonay", value.fieldMonay as keyof React.ReactNode);
      form.append("server", value.server as keyof React.ReactNode);
      form.append("serverId", value.serverId as keyof React.ReactNode);
      await dispatch(callDateUser({method: 'post', url, form}));
      update(statusUpdate, {login: dataSignIn?.login || '', password: dataSignIn?.password || ''}, dispatch);
    }

    return (
      <form
        action={url}
        method="post"
        onSubmit={onSubmitData}
        className={styles.buyCoins}
      >
        <div className={styles.wrapper}>
          <ButtonSend
            className={`${styles.btn} ${gStyles.textMedium}`}
            text="Купить игровую валюту"
          />
        </div>
      </form>
    );
  } else {
    return <></>;
  }
}
