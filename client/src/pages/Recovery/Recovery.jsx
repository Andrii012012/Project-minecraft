import React from "react";
import "./recoveryStyle.css";
import "./recoveryMedia.css";
import imageMain from "../../assets/images/global/minacraft-image-main.jpg";
import iconRecovery from "../../assets/images/page/Recovery/recovery-icon-recovery.svg";
import { urlBd } from "../../configs/urls";
import { useContext } from "react";
import { UserData } from "../../contexts/user";
import SendRecovery from "./components/SendRecovery/SendRecovery.jsx";

export default function Recovery(props) {
  const data = useContext(UserData);
  const onFundSend = data[0];
  return (
    <main className="page">
      <section className="recovery">
        <div className="recovery__header">
          <img className="recovery__image" src={imageMain} alt="" />
          <div className="recovery__wrapper">
            <img
              className="recovery__icon"
              src={iconRecovery}
              alt="iconRecovery"
            />
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
          <SendRecovery url={urlBd} onFundSend={onFundSend} />
        </div>
      </section>
    </main>
  );
}
