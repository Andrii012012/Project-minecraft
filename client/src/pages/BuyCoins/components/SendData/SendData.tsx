import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../../styles/style.module.scss";
import ButtonSend from "../../../../components/ui/ButtonSend/ButtonSend";
import { IData } from "../../../../interface/interface";
import { TFuncSend } from "../../../../interface/type";
import { IExchange } from "../../interface/interface";
import { NavigateFunction } from "react-router-dom";

interface IProps {
  url: string;
  data: IData | null;
  onFuncSend: TFuncSend;
  goHome: NavigateFunction;
  value: IExchange;
}

export default function SendData(props: IProps): JSX.Element {
  let { url, data, onFuncSend, goHome, value } = props;

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
      let result = await onFuncSend(url, form);
      if (result) {
        goHome("/");
        window.location.reload();
      }
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
