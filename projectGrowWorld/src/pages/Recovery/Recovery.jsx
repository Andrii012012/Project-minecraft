import React from "react";
import "./Recovery.css";
import "./RecoveryMediaStyle.css";
import imageMain from "../../assets/images/global/minacraft-image-main.jpg";
import iconRecovery from '../../assets/images/page/Recovery/recovery-icon-recovery.svg';
import { urlBd } from "../../configs/urls";
import BlockField from "../../components/ui/BlockField/BlockField";
import { useState, useContext } from "react";
import ButtonSend from "../../components/ui/buttonSend/ButtonSend";
import { UserData } from "../../contexts/user";

export default function Recovery(props) {
  const [valueField, setValueField] = useState({ email: "" });
  const data = useContext(UserData);
   const setData = data[0];
  function submitEmail(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("recovery", true);
    form.append("email", valueField.email);
    setData(urlBd, form);
  }

  return (
    <main className="page">
      <section className="recovery">
        <div className="recovery__header">
          <img className="recovery__image" src={imageMain} alt="" />
          <div className="recovery__wrapper">
            <img className="recovery__icon" src={iconRecovery} alt="iconRecovery" />
            <div className="recovery__body-info">
              <h1 className="recovery__title title">Восстановление пароля</h1>
              <p className="recovery__subtitle subtitle">
                Забыли пароль? Не беда! его легко восстановить
              </p>
            </div>
          </div>
        </div>
        <div className="recovery__content container-content">
          <p className="recovery__text text">
            Для восстановления вашего пароля с аккаунта, вам необходимо ввести
            той email который вы указывали при регистрции аккаунта. Если
            все-таки вы не смогли восстановить аккаунт, пожалуйста обратитесь к{" "}
            <a target="_blank" href="https://vk.com/im?media=&sel=-224754509">
              тех.поддержке
            </a>
          </p>
          <form
            onSubmit={submitEmail}
            action={urlBd}
            method="post"
            className="form-recovery"
          >
            <div className="form-recovery__wrapper">
              <BlockField
                className="form-recovery"
                title="Введите ваш email"
                text="Не забудьте проверить папку 'Спам'"
                type="email"
                name="recoveryEmail"
                point={false}
                valueField={valueField.email}
                setValueField={setValueField}
                changeThing="email"
              />
              <div className="form-recovery__body-btn">
                <ButtonSend
                  className="form-recovery__btn"
                  text="Отправить инструкцию"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
