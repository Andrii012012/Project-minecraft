import React from "react";
import "./sendRecoveryStyle.css";
import { useState } from "react";
import ButtonSend from "../../../../components/ui/ButtonSend/ButtonSend";
import PointFieldGroup from "../../../../components/ui/PointFieldGroup/PointFieldGroup";
import PointFieldFilling from "../../../../components/ui/PointFieldFilling/PointFieldFilling";
import { validation } from "../../../../utils/validation";

export default function SendRecovery(props) {
  let { url, onFundSend } = props;

  const [valueField, setValueField] = useState({ email: "" });
  function onSubmitData(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("recovery", true);
    form.append("email", valueField.email);
    let result = validation(document.querySelectorAll(".form-recovery .field"));
    if (result) {
      onFundSend(url, form);
    }
  }

  return (
    <form
      onSubmit={onSubmitData}
      action={url}
      method="post"
      className="form-recovery"
    >
      <div className="form-recovery__wrapper">
        <PointFieldGroup point={false}>
          <PointFieldFilling
            title="Введите ваш email"
            subtitle="Не забудьте проверить папку 'Спам'"
            type="email"
            name="email"
            value={valueField}
            setValue={setValueField}
            changeKey={"email"}
          />
        </PointFieldGroup>
        <div className="form-recovery__body-btn">
          <ButtonSend
            className="form-recovery__btn"
            text="Отправить инструкцию"
          />
        </div>
      </div>
    </form>
  );
}
