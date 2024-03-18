import React from "react";
import "./securityStyle.css";
import "./securityMedia.css";
import { urlBd } from "../../../../configs/urls";
import FormUpdataPassword from "../../components/FormUpdataPassword/FormUpdataPassword";
import Protection from "../../components/Protection/Protection";

export default function Security(props) {
  let { user, onFuncSend, goHome } = props;

  return (
    <div className="security">
      <h2 className="security__title title">Настройки безопасности</h2>
      <FormUpdataPassword
        goHome={goHome}
        onFuncSend={onFuncSend}
        url={urlBd}
        dataUser={user}
      />
      <Protection name={user.login} />
    </div>
  );
}
