import React from "react";
import "./sendDataStyle.css";
import { useNavigate } from "react-router-dom";
import ButtonSend from "../../../../components/ui/ButtonSend/ButtonSend";

export default function SendData(props) {
  let { onFuncSend, data, url, dataUser } = props;

  const goHome = useNavigate();

  async function onSubmitData(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("id", dataUser.id);
    form.append("server", data.server);
    form.append("serverId", data.serverId);
    form.append("privilege", data.privilege);
    form.append("price", data.finalPrice);
    form.append("duration", data.duration);
    let result = await onFuncSend(url, form);
    if (result) {
      goHome("/");
      window.location.reload();
    }
  }

  return (
    <form
      className="privilege-form"
      action={url}
      onSubmit={(e) => onSubmitData(e)}
      method="post"
    >
      <div className="privilege-form__wrapper">
        <ButtonSend className="privilege-form__btn" text="Купить привилегию" />
      </div>
    </form>
  );
}
