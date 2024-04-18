import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../../styles/style.module.scss";
import ButtonSend from "../../../../components/ui/ButtonSend/ButtonSend";
import { IDataSend } from "../../interface/interface";
import { TFuncSend } from "../../../../interface/type";
import { NavigateFunction } from "react-router-dom";

interface IProps {
  url: string;
  id: string;
  goHome: NavigateFunction;
  data: IDataSend;
  onFuncSend: TFuncSend;
}

export default function SendData(props: IProps): JSX.Element {
  let { url, id, goHome, data, onFuncSend } = props;

  async function onSendData(e: React.FormEvent) {
    e.preventDefault();
    const form = new FormData();
    form.append("id", id);
    form.append("server", data?.server!);
    form.append("serverId", data?.serverId!);
    form.append("costUnban", data?.price as keyof React.ReactNode);
    let result = await onFuncSend(url, form);
    if (result) {
      goHome("/");
      window.location.reload();
    }
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
