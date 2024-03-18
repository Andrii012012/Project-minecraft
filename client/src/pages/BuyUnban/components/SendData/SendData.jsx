import React from "react";
import "./sendDataStyle.css";
import "./sendDataMedia.css";
import ButtonSend from "../../../../components/ui/ButtonSend/ButtonSend";

export default function SendData(props) {
  let { url, id, goHome, data, onFuncSend } = props;

  async function onSendData(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("buyUnban", true);
    form.append("id", id);
    form.append("server", data.server);
    form.append("serverId", data.serverId);
    form.append("costUnban", data.unban);
    let result = await onFuncSend(url, form);
    console.log(result);
    if (result) {
      console.log(result);
      goHome("/");
      window.location.reload();
    }
  }

  return (
    <form
      action={url}
      method="post"
      onSubmit={(e) => onSendData(e)}
      className="form-buy-unban"
    >
      <div className="form-buy-unban__wrapper">
        <ButtonSend className="form-buy-unban__btn" text="Купить разбан" />
      </div>
    </form>
  );
}
