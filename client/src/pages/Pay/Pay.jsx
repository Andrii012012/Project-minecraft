import React from "react";
import "./payStyle.css";
import "./payMedia.css";
import UserHeader from "../../components/UserHeader/UserHeader.jsx";
import { useContext, useState, useCallback } from "react";
import { UserData } from "../../contexts/user";
import paySystemCard from "../../assets/images/page/Pay/pay-mastercard.png";
import SelectOffer from "../../components/SelectOffer/SelectOffer.jsx";
import { CABINET_ROUTE } from "../../routers/routes.jsx";
import CardList from "./components/CardList/CardList.jsx";
import CalcMonay from "./components/CalcMonay/CalcMonay.jsx";
import PROMOTIONS from "../../constants/promotions";

const CARDS = [
  { img: paySystemCard },
  { img: paySystemCard },
  { img: paySystemCard },
  { img: paySystemCard },
];

export default function Pay(props) {
  let {} = props;
  const data = useContext(UserData);
  const dataUser = data[2].user;

  const [valuePrice, setValuePrice] = useState({
    field: "",
    percent: 0,
    bonus: 0,
  });

 const onGetBonus = useCallback((price, percent) => {
    const percentBonus = "1." + String(percent);
    const bonus = price * Math.abs(percentBonus);
    const result = bonus.toFixed(0);
    setValuePrice((prevState) => {
      const newValue = { ...prevState };
      newValue.field = price;
      newValue.percent = percent;
      newValue.bonus = result;
      return newValue;
    });
  }, []);

  if (dataUser) {
    let { avatar } = dataUser;
    return (
      <main className="page">
        <section className="pay">
          <UserHeader
            title="Личный кабинет"
            text="Пополнение баланса"
            avatar={avatar}
            path={CABINET_ROUTE}
          />
          <div className="pay__content container-content">
            <SelectOffer
              list={PROMOTIONS}
              onSetValue={onGetBonus}
              className="pay-promotions"
            />
            <div className="pay__choose-coins pay__section">
              <CalcMonay
                promotions={PROMOTIONS}
                setValue={setValuePrice}
                value={valuePrice}
              />
            </div>
            <div className="pay__body-card pay__section">
              <h2 className="pay__choice-pay-system title-section">
                Выберите платёжную систему
              </h2>
              <ul className="pay__lists-card">
                <CardList list={CARDS} />
              </ul>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
