import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../../styles/style.module.scss";
import { useState } from "react";
import ButtonSend from "../../../../components/ui/ButtonSend/ButtonSend";
import PointFieldGroup from "../../../../components/ui/PointFieldGroup/PointFieldGroup";
import PointFieldFilling from "../../../../components/ui/PointFieldFilling/PointFieldFilling";
import { validation } from "../../../../utils/validation";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../../../routers/routes";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { callDateUser } from "../../../../features/user/user.";

interface IProps {
  url: string;
}

type TStateValueField = {
  email?: string;
  [key: string]: string | undefined;
};

type TSetStateValueField = React.Dispatch<React.SetStateAction<TStateValueField>>;

export default function SendRecovery(props: IProps): JSX.Element {
  let { url } = props;

  const dispatch = useAppDispatch();

  const goHome = useNavigate();

  const [valueField, setValueField] = useState<TStateValueField>({ email: "" });
  function onSubmitData(e: React.FormEvent) {
    e.preventDefault();
    const form = new FormData();
    form.append("email", valueField.email!);
    let result = validation(
      document.querySelectorAll<HTMLInputElement>(`.${styles.field}`)
    );
    if (result) {
      dispatch(callDateUser({ method: 'post', url, form }));
      goHome(HOME_ROUTE);
      window.location.reload();
    }
  }

  return (
    <form
      onSubmit={onSubmitData}
      action={url}
      method="post"
      className={styles.formField}
    >
      <div className={styles.wrapper}>
        <PointFieldGroup point={false}>
          <PointFieldFilling<TSetStateValueField>
            title="Введите ваш email"
            subtitle="Не забудьте проверить папку 'Спам'"
            type="text"
            name="email"
            value={valueField.email}
            setValue={setValueField}
            changeKey={"email"}
            className={styles.field}
          />
        </PointFieldGroup>
        <div className={styles.bodyBtn}>
          <ButtonSend
            className={gStyles.textMedium}
            text="Отправить инструкцию"
          />
        </div>
      </div>
    </form>
  );
}
