import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../../styles/style.module.scss";
import { urlUpdataPassword } from "../../../../configs/urls";
import { FormUpdataPassword } from "../../components/FormUpdataPassword/FormUpdataPassword";
import Protection from "../../components/Protection/Protection";
import { IData } from "../../../../interface/interface";
import { TFuncSend } from "../../../../interface/type";
import { NavigateFunction } from "react-router-dom";

interface IProps {
  user: IData;
  onFuncSend: TFuncSend;
  goHome: NavigateFunction;
}

export default function Security(props: IProps): JSX.Element {
  let { user, onFuncSend, goHome } = props;

  return (
    <div>
      <h2 className={`${styles.title} ${gStyles.sectionName}`}>
        Настройки безопасности
      </h2>
      <FormUpdataPassword
        goHome={goHome}
        onFuncSend={onFuncSend}
        url={urlUpdataPassword}
        id={user.id}
      />
      <Protection name={user.login} />
    </div>
  );
}
