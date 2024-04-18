import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../../styles/style.module.scss";
import { useNavigate } from "react-router-dom";
import ButtonSend from "../../../../components/ui/ButtonSend/ButtonSend";
import { TFuncSend } from "../../../../interface/type";
import { IStatBuyPrivilege } from "../../interface/interface";
import { IData } from "../../../../interface/interface";

interface IProps {
  onFuncSend: TFuncSend;
  data: IStatBuyPrivilege;
  url: string;
  dataUser: IData | null;
}

export default function SendData(props: IProps): JSX.Element {
  let { onFuncSend, data, url, dataUser } = props;

  const goHome = useNavigate();

  async function onSubmitData(e: React.FormEvent) {
    e.preventDefault();
    if (dataUser && data) {
      const form = new FormData();
      form.append("id", dataUser.id);
      form.append("server", data?.server!);
      form.append("serverId", data?.serverId!);
      form.append("privilege", data?.privilege!);
      form.append("price", data?.finalPrice as keyof React.ReactNode);
      form.append("duration", data?.duration as keyof React.ReactNode);
      let result = await onFuncSend(url, form);
      if (result) {
        goHome("/");
        window.location.reload();
      }
    }
  }

  return (
    <form action={url} onSubmit={(e) => onSubmitData(e)} method="post">
      <div className={styles.wrapper}>
        <ButtonSend
          className={`${gStyles.textMedium} ${styles.btn}`}
          text="Купить привилегию"
        />
      </div>
    </form>
  );
}
