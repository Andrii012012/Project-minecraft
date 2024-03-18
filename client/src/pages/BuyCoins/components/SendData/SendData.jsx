import React from "react";
import ButtonSend from "../../../../components/ui/ButtonSend/ButtonSend";
import "./sendDataStyle.css";
import "./sendDataMedia.css";

export default function SendData(props) {
  let { url, dataUser, onFuncSend, goHome, value } = props;

  async function onSubmitData(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("id", dataUser.id);
    form.append("coins", value.bonus);
    form.append("monay", dataUser.coins);
    form.append("minusMonay", value.fieldMoney);
    form.append("server", value.server);
    form.append("serverId", value.serverId);
    let result = await onFuncSend(url, form);
    if (result) {
      goHome("/");
      window.location.reload();
    }
  }

  return (
    <form
      action={url}
      method="post"
      onSubmit={onSubmitData}
      className="form-buy-coins"
    >
      <div className="form-buy-coins__wrapper">
        <ButtonSend
          className="form-buy-coins__btn"
          text="Купить игровую валюту"
        />
      </div>
    </form>
  );
}
