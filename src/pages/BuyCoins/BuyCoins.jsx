import React from "react";
import "./buyCoins.css";
import "./buyCoinsMedia.css";
import { useContext, useState, useCallback } from "react";
import UserHeader from "../../components/UserHeader/UserHeader";
import { UserData } from "../../contexts/user";
import { CABINET_ROUTE } from "../../routers/routes";
import Selecting from "../../components/Selecting/Selecting";
import { dataServers } from "../../contexts/dataServers";
import SelectOffer from "../../components/SelectOffer/SelectOffer";
import changePrice from "../../utils/calculationBonus";
import { urlBd } from "../../configs/urls";
import { useNavigate } from "react-router-dom";
import CalcMonay from "./components/CalcMonay/CalcMonay";
import SendData from "./components/SendData/SendData";
import PROMOTIONS from "../../constants/promotions";

export default function BuyCoins(props) {
  let {} = props;
  const dataServer = useContext(dataServers);
  const listServers = dataServer[2];
  const data = useContext(UserData);
  const onFuncSend = data[0];
  const dataUser = data[2].user;
  const goHome = useNavigate();

  const [exchange, setExchange] = useState({
    server: null,
    serverId: null,
    price: null,
    bonus: null,
    fieldMoney: "",
    fieldGameMoney: "",
  });

  const onSetValueField = useCallback((price, percent) => {
    setExchange((prevState) => {
      const newValue = { ...prevState };
      newValue.percent = parseFloat("1." + percent);
      newValue.fieldGameMoney = price;
      newValue.fieldMoney = (newValue.fieldGameMoney / 3).toFixed(1);
      changePrice(
        newValue.fieldGameMoney,
        setExchange,
        PROMOTIONS,
        "fieldGameMoney",
        false
      );
      return newValue;
    });
  }, []);

  if (dataUser) {
    let { avatar } = dataUser;

    return (
      <main className="page">
        <section className="buy-coins">
          <UserHeader
            avatar={avatar}
            title="Личный кабинет"
            text="Покупка игровой валюты"
            path={CABINET_ROUTE}
          />
          <div className="buy-coins__content container-content">
            <Selecting
              className="buy-coins__select"
              text="Выберите сервер на котором хотите получить игровую валюту"
              options={listServers}
              setValue={setExchange}
              value={exchange}
              changeKey={["server", "serverId"]}
            />
            <div className="buy-coins__buy-coins buy-coins___section">
              <div className="buy-coins__body-exchange">
                <h1 className="buy-coins__title">Покупка игровой валюты</h1>
                <div className="buy-coins__info-exchange">
                  <p className="buy-coins__prices">
                    1 <span>₽</span> = 3 <span>₽</span>
                  </p>
                </div>
                <div className="buy-coins__exchange">
                  <CalcMonay
                    value={exchange}
                    setValue={setExchange}
                    promotions={PROMOTIONS}
                  />
                </div>
                <SelectOffer
                  list={PROMOTIONS}
                  setValue={setExchange}
                  className="buy-coins__promotions"
                  onSetValue={onSetValueField}
                />
                <p className="buy-coins__results">
                  Итоговое количество игровой валюты - {exchange.bonus}
                </p>
                {exchange.server && (
                  <SendData
                    url={urlBd}
                    dataUser={dataUser}
                    goHome={goHome}
                    value={exchange}
                    onFuncSend={onFuncSend}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
