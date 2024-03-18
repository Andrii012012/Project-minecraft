import React from "react";
import "./registerStyle.css";
import "./registerMedia.css";
import imageMain from "../../assets/images/page/Register/register-image-main.png";
import incoFilling from "../../assets/images/global/icon-filling-data.svg";
import { useContext } from "react";
import { UserData } from "../../contexts/user";
import { urlBd } from "../../configs/urls";
import { useNavigate } from "react-router-dom";
import AccessClosed from "../../components/AccessClosed/AccessClosed";
import SendData from "./components/SendData/SendData";


export default function Register(props) {
  const getMethodsUser = useContext(UserData);
  const onFundSend = getMethodsUser[0];
  const getHome = useNavigate();

  if (!getMethodsUser[2].isActive) {
    return (
      <main className="page">
        <section className="register">
          <div className="register__header">
            <div className="register__image">
              <img src={imageMain} alt="" />
            </div>
            <div className="register__body">
              <img className="register__icon" src={incoFilling} />
              <div className="register__body-info">
                <h1 className="register__title title">Регистрация</h1>
                <p className="register__subtitle subtitle">
                  Впишитесь в нашу общую историю!
                </p>
              </div>
            </div>
          </div>
          <div className="register__content container-content">
          <SendData url={urlBd} goHome={getHome} onFundSend={onFundSend}/>
          </div>
        </section>
      </main>
    );
  } else {
    return <AccessClosed userHeader={false}/>;
  }
}
