import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../../styles/style.module.scss";
import { validation } from "../../../../utils/validation";
import ButtonSend from "../../../../components/ui/ButtonSend/ButtonSend";
import PointFieldGroup from "../../../../components/ui/PointFieldGroup/PointFieldGroup";
import { useState } from "react";
import PointFieldFilling from "../../../../components/ui/PointFieldFilling/PointFieldFilling";
import { TFuncSend } from "../../../../interface/type";
import { NavigateFunction } from "react-router-dom";

interface IProps {
  onFundSend: TFuncSend;
  url: string;
  goHome: NavigateFunction;
}

interface IValueField {
  login?: string;
  email?: string;
  password?: string;
  repeatPassword?: string;
  [key: string]: string | undefined;
}

type TValueSetField = React.Dispatch<React.SetStateAction<IValueField>>;

function SendData(props: IProps): JSX.Element {
  let { onFundSend, url, goHome } = props;

  const [valueField, setValueField] = useState<IValueField>({
    login: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  async function onSubmitData(e: React.FormEvent) {
    e.preventDefault();
    const dataForm = new FormData();
    dataForm.append("login", valueField.login!);
    dataForm.append("email", valueField.email!);
    dataForm.append("password", valueField.password!);
    dataForm.append("date", String(new Date().getTime()));
    let result = validation(document.querySelectorAll(`.${styles.field}`));
    if (result) {
      onFundSend(url, dataForm);
      goHome("/");
      window.location.reload();
    }
  }

  return (
    <form
      onSubmit={onSubmitData}
      action={url}
      method="post"
    >
      <ul className={styles.list}>
        <PointFieldGroup
          className={styles.pointNumber}
          number="1"
          background={`#ff420e`}
        >
          <PointFieldFilling<TValueSetField>
            type="text"
            name="login"
            value={valueField.login}
            setValue={setValueField}
            changeKey={"login"}
            title="Придумайте логин"
            subtitle="Логин - ваш игровой ник, от 4 до 16 символов"
            className={styles.field}
          />
        </PointFieldGroup>
        <PointFieldGroup
          className={styles.pointNumber}
          number="2"
          background={`#80bd9e`}
        >
          <PointFieldFilling<TValueSetField>
            type="text"
            name="email"
            value={valueField.email}
            setValue={setValueField}
            changeKey={"email"}
            title="Введите ваш Email"
            subtitle="Служит для сохранности и восстановления аккаунта"
            className={styles.field}
          />
        </PointFieldGroup>
        <PointFieldGroup
          className={styles.pointNumber}
          number="3"
          background={`coral`}
        >
          <PointFieldFilling<TValueSetField>
            type="password"
            name="password"
            value={valueField.password}
            setValue={setValueField}
            changeKey={"password"}
            title="Придумайте пароль"
            subtitle="Чем больше и сложнее пароль тем лучше"
            className={styles.field}
          />
        </PointFieldGroup>
        <PointFieldGroup
          className={styles.pointNumber}
          number="4"
          background={`#89da59`}
        >
          <PointFieldFilling<TValueSetField>
            type="password"
            name="repeatPassword"
            value={valueField.repeatPassword}
            setValue={setValueField}
            changeKey={"repeatPassword"}
            title="Повторите пароль"
            subtitle="Убедитесь в том что пароль действительно ввели правильно"
            className={styles.field}
          />
        </PointFieldGroup>
      </ul>
      <div className={styles.send}>
        <p className={`${styles.agree} ${gStyles.textSmall}`}>
          Регистрируясь на нашем проекте, вы{" "}
          <span>автоматически соглашаетесь с игровыми правилами</span> и
          пользовательским соглашением.
        </p>
        <ButtonSend className={styles.btn} text="Зарегистрируваться" />
      </div>
    </form>
  );
}

export { SendData, type IValueField, type TValueSetField };
