import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../../styles/style.module.scss";
import ButtonSend from "../../../ui/ButtonSend/ButtonSend";
import { NavLink } from "react-router-dom";
import Field from "../../../ui/Field/Field";
import { useState } from "react";
import { urlSignBD } from "../../../../configs/urls";
import { RECOVERY_ROUTE, REGISTER_ROUTE } from "../../../../routers/routes";

interface IProps {
  onFuncSend: (urlBd: string, form: object) => Promise<boolean | void>;
}

type TStateValue = {
  login?: string;
  password?: string;
}

type TSetStateValue = React.Dispatch<React.SetStateAction<TStateValue>>;

function SignIn(props: IProps): JSX.Element {
  let { onFuncSend } = props;

  const [value, setValue] = useState<TStateValue>({
    login: "",
    password: "",
  });

  async function onSubmitData(e: React.FormEvent) {
    e.preventDefault();
    let form = new FormData();
    form.append("login", value.login!);
    form.append("password", value.password!);
    onFuncSend(urlSignBD, form);
  }

  return (
    <form
      action={urlSignBD}
      onSubmit={onSubmitData}
      method="post"
      name="auth"
      className={styles.form}
    >
      <div className={styles.wrapper}>
        <div className={styles.login}>
          <Field<TSetStateValue>
            className={styles.inputLogin}
            type="text"
            placeholder="Логин"
            name="login"
            value={value.login}
            setValue={setValue}
            field={"login"}
          />
        </div>
        <div>
          <Field<TSetStateValue>
            className={styles.inputPass}
            type="password"
            placeholder="Пароль"
            name="password"
            value={value.password}
            setValue={setValue}
            field={"password"}
          />
        </div>
        <div className={styles.containerBtnSign}>
          <ButtonSend
            text="Войти"
            className={`${styles.textMedium} ${styles.btn}`}
          />
        </div>
        <div className={styles.btnContainer}>
          <NavLink
            className={`${styles.btnRegister} ${gStyles.textMedium}`}
            to={REGISTER_ROUTE}
          >
            Регистрация
          </NavLink>
          <NavLink
            to={RECOVERY_ROUTE}
            className={`${styles.btnRecovery} ${gStyles.textMedium}`}
          >
            Забыл пароль?
          </NavLink>
        </div>
      </div>
    </form>
  );
}

export {SignIn, type TStateValue, type TSetStateValue}
