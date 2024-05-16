import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../styles/style.module.scss";
import { useContext, useState, useCallback } from "react";
import UserHeader from "../../components/UserHeader/UserHeader";
import { IServer } from "../../interface/interface";
import { CABINET_ROUTE } from "../../routers/routes";
import Selecting from "../../components/Selecting/Selecting";
import { dataServers } from "../../contexts/dataServers";
import SelectOffer from "../../components/SelectOffer/SelectOffer";
import changePrice from "../../utils/calculationBonus";
import { urlBuyGameMonay } from "../../configs/urls";
import { useNavigate } from "react-router-dom";
import CalcMonay from "./components/CalcMonay/CalcMonay";
import SendData from "./components/SendData/SendData";
import { IPromotions, PROMOTIONS } from "../../constants/promotions";
import { IExchange } from "./interface/interface";
import { TSetExchange } from "./interface/type";
import { useAppSelector } from "../../hooks/useAppSelector";


export default function BuyCoins(): JSX.Element {
  const data = useAppSelector(state => state.user);

  const dataServer = useContext<IServer[] | null>(dataServers);

  const dataUser = data.user;

  const [exchange, setExchange] = useState<IExchange>({
    server: "",
    serverId: "",
    price: 0,
    bonus: 0,
    percent: 0,
    fieldMonay: "",
    fieldGameMonay: "",
  });

  const onSetValueField = useCallback(
    (price: number, percent: number | string) => {
      setExchange((prevState) => {
        const newValue = { ...prevState };
        newValue.percent = parseFloat("1." + percent);
        newValue.fieldGameMonay = price;
        newValue.fieldMonay = (newValue.fieldGameMonay / 3).toFixed(1);
        changePrice<TSetExchange, IPromotions>(
          newValue.fieldGameMonay,
          setExchange,
          PROMOTIONS,
          "fieldGameMonay",
          false
        );
        return newValue;
      });
    },
    []
  );

  return (
    <main className={gStyles.page}>
      <section className={styles.buyCoins}>
        <UserHeader
          avatar={dataUser ? dataUser.avatar : ""}
          title="Личный кабинет"
          text="Покупка игровой валюты"
          path={CABINET_ROUTE}
        />
        <div className={`${styles.content} ${gStyles.containerContent}`}>
          <Selecting<TSetExchange, IExchange>
            className={styles.select}
            text="Выберите сервер на котором хотите получить игровую валюту"
            options={dataServer ? dataServer : []}
            setValue={setExchange}
            value={exchange}
            changeKey={["server", "serverId"]}
          />
          <div className={styles.section}>
            <div className={styles.bodyExchange}>
              <h1 className={`${styles.title} ${gStyles.sectionName}`}>
                Покупка игровой валюты
              </h1>
              <div className={styles.infoExchange}>
                <p className={styles.prices}>
                  1 <span>₽</span> = 3 <span>₽</span>
                </p>
              </div>
              <div className={styles.exchange}>
                <CalcMonay
                  value={exchange}
                  setValue={setExchange}
                  promotions={PROMOTIONS}
                />
              </div>
              <SelectOffer
                list={PROMOTIONS}
                className={styles.promotions}
                onSetValue={onSetValueField}
              />
              <p className={`${styles.results} ${gStyles.textMedium}`}>
                Итоговое количество игровой валюты - {exchange.bonus}
              </p>
              {exchange.server && (
                <SendData
                  url={urlBuyGameMonay}
                  data={data.user}
                  value={exchange}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
