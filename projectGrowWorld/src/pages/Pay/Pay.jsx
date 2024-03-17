import React from "react";
import "./Pay.css";
import "./PayMediaStyle.css";
import UserHeader from "../../components/UserHeader/UserHeader.jsx";
import { useContext, useState } from "react";
import { UserData } from "../../contexts/user";
import promotion from "../../assets/images/global/image-monets.png";
import paySystemCard from "../../assets/images/page/Pay/pay-mastercard.png";
import SelectOffer from "../../components/selectOffer/SelectOffer.jsx";
import changePrice from "../../utils/calculationBonus.js";
import { CABINET_ROUTE } from "../../routers/routes.jsx";

const PROMOTIONS = [
  { img: promotion, title: "1000", bonus: "Бонус в подарок", percent: "15" },
  { img: promotion, title: "2000", bonus: "Бонус в подарок", percent: "25" },
  { img: promotion, title: "3000", bonus: "Бонус в подарок", percent: "35" },
  { img: promotion, title: "5000", bonus: "Бонус в подарок", percent: "45" },
];

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

 async function getBonus(price, percent) {
    const percentBonus = "1." + String(percent);
    const bonus = price * Math.abs(percentBonus);
    const result = bonus.toFixed(0);
     setValuePrice((prevState) => {
       const newValue = {...prevState};
        newValue.field = price;
        newValue.percent = percent;
        newValue.bonus = result;
      return newValue;
     })
  }

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
              offer={PROMOTIONS}
              func={getBonus}
              className="pay-promotions"
            />
            <div className="pay__choose-coins pay__section">
              <form className="buy-monay">
                <div className="buy-monay__wrapper">
                  <div className="buy-monay__info">
                    <p className='buy-monay__info-about-pay text'>
                      Или самостоятельно укажите нужную вам сумму монет в
                      специальном поле справа
                    </p>
                    <p className='buy-monay__info-percent text'>
                      После пополнения на Ваш счет будет зачислено: Включая
                      акцию на {valuePrice.percent}%
                    </p>
                  </div>
                  <div className="buy-conis__set">
                    <div className="buy-monay__body-input">
                      <input
                        id="buy-monay-input"
                        className="buy-monay__input"
                        name="buy-monay"
                        maxLength="9"
                        value={valuePrice.field}
                        onChange={(e) =>
                          changePrice(
                            e.target.value,
                            setValuePrice,
                            PROMOTIONS,
                            "field"
                          )
                        }
                      />
                      <label
                        htmlFor="buy-monay-input"
                        className="buy-monay__input-text"
                      >
                        введите количество монет
                      </label>
                    </div>
                    <p className="buy-monay__show-sum-coins">
                      {valuePrice.bonus > 0 ? valuePrice.bonus : 0}
                      <span>монет</span>
                    </p>
                  </div>
                </div>
              </form>
            </div>
            <div className="pay__body-card pay__section">
              <h2 className="pay__choice-pay-system title-section">
                Выберите платёжную систему
              </h2>
              <ul className="pay__lists-card">
                {CARDS.map((item, index) => (
                  <li key={index} className="pay__item-play-system">
                    <img src={item.img} alt="" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
