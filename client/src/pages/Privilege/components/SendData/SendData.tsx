import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../../styles/style.module.scss";
import ButtonSend from "../../../../components/ui/ButtonSend/ButtonSend";
import { IStatBuyPrivilege } from "../../interface/interface";
import { IData } from "../../../../interface/interface";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { callDateUser } from "../../../../features/user/user.";
import update from "../../../../features/utils/update";
import { useAppSelector } from "../../../../hooks/useAppSelector";

interface IProps {
  data: IStatBuyPrivilege;
  url: string;
  dataUser: IData | null;
}

export default function SendData(props: IProps): JSX.Element {
  let { data, url, dataUser } = props;

  const dispatch = useAppDispatch();
  const userData = useAppSelector(state => state.user);
  const statusUpdate = userData.status;
  const dataSignIn = userData.dataSingIn;

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
      await dispatch(callDateUser({ method: 'post', url, form }));
      update(statusUpdate, {login: dataSignIn?.login || '', password: dataSignIn?.password || ''}, dispatch);
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
