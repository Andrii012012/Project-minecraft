import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../../styles/style.module.scss";
import { useState } from "react";
import PointFieldGroup from "../../../../components/ui/PointFieldGroup/PointFieldGroup";
import PointFieldFilling from "../../../../components/ui/PointFieldFilling/PointFieldFilling";
import ButtonSend from "../../../../components/ui/ButtonSend/ButtonSend";
import { callDateUser } from "../../../../features/user/user.";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";

interface IProps {
  url: string;
  id: string;
}

type TField = {
  oldPassword?: string;
  newPassword?: string;
  repeatNewPassword?: string;
};

type TSetField = React.Dispatch<React.SetStateAction<TField>>;

function FormUpdataPassword(props: IProps): JSX.Element {
  let { url, id } = props;

  const dispatch = useAppDispatch();

  const [valueField, setValueField] = useState<TField>({
    oldPassword: "",
    newPassword: "",
    repeatNewPassword: "",
  });

  async function onSubmitChagenData(e: React.FormEvent) {
    e.preventDefault();
    const form = new FormData();
    form.append("id", id);
    form.append("oldPassword", valueField.oldPassword!);
    form.append("newPassword", valueField.newPassword!);
    dispatch(callDateUser({ method: 'post', url, form }));
  }

  return (
    <section className={styles.changePass}>
      <h3 className={`${styles.title} ${gStyles.textBig}`}>Смена пароля:</h3>
      <form onSubmit={onSubmitChagenData} action={url} method="post">
        <div className={styles.wrapper}>
          <ul className={styles.list}>
            <PointFieldGroup
              className={styles.pointField}
              number="1"
              background="#ff420e"
            >
              <PointFieldFilling<TSetField>
                title="Введите старый пароль"
                type="password"
                name="old-password"
                value={valueField.oldPassword}
                setValue={setValueField}
                changeKey="oldPassword"
              />
            </PointFieldGroup>
            <PointFieldGroup
              className={styles.pointField}
              number="2"
              background="#80bd9e"
            >
              <PointFieldFilling<TSetField>
                title="Введите новый пароль"
                type="password"
                name="new-password"
                value={valueField.newPassword}
                setValue={setValueField}
                changeKey="newPassword"
              />
            </PointFieldGroup>
            <PointFieldGroup
              className={styles.pointField}
              number="3"
              background="#f98866"
            >
              <PointFieldFilling<TSetField>
                title="Введите повторно новый пароль"
                type="password"
                name="repeat-new-password"
                value={valueField.repeatNewPassword}
                setValue={setValueField}
                changeKey="repeatNewPassword"
              />
            </PointFieldGroup>
          </ul>
          <div className={styles.bodyBtn}>
            <ButtonSend
              className={`${styles.btn} ${gStyles.textMedium}`}
              text="Сменить пароль"
            />
          </div>
        </div>
      </form>
    </section>
  );
}

export { FormUpdataPassword, type TField, type TSetField };
