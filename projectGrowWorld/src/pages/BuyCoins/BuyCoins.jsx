import React from "react";
import "./BuyCoins.css";
import "./BuyCoinsMediaStyle.css";
import { useContext, useState, useEffect } from "react";
import UserHeader from "../../components/UserHeader/UserHeader";
import { UserData } from "../../contexts/user";
import { CABINET_ROUTE } from "../../routers/routes";
import SelectThing from "../../components/selectThing/SelectThing";
import { dataServers } from "../../contexts/dataServers";
import SelectOffer from "../../components/selectOffer/SelectOffer";
import promotion from "../../assets/images/global/image-monets.png";
import changePrice from "../../utils/calculationBonus";
import { urlBd } from "../../configs/urls";
import ButtonSend from "../../components/ui/buttonSend/ButtonSend";
import { useNavigate } from "react-router-dom";

const PROMOTIONS = [
  { img: promotion, title: "1000", bonus: "Бонус в подарок", percent: "15" },
  { img: promotion, title: "2000", bonus: "Бонус в подарок", percent: "25" },
  { img: promotion, title: "3000", bonus: "Бонус в подарок", percent: "35" },
  { img: promotion, title: "5000", bonus: "Бонус в подарок", percent: "45" },
];

export default function BuyCoins(props) {
  let {} = props;
  const dataServer = useContext(dataServers);
  const listServers = dataServer[2];
  const data = useContext(UserData);
  const funcPost = data[0];
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

  function resultMoney(e, typeConvector) {
    setExchange((prevState) => {
      const newObject = { ...prevState };
      newObject.typeExchange = typeConvector;
      if (e.target.name === "money") {
        newObject.fieldMoney = e.target.value;
        newObject.fieldGameMoney =
          newObject.fieldMoney === ""
            ? ""
            : Number(newObject.fieldMoney * 3).toFixed(0);
        changePrice(
          newObject.fieldGameMoney,
          setExchange,
          PROMOTIONS,
          "fieldGameMoney",
          false
        );
      } else if (e.target.name === "gameMoney") {
        newObject.fieldGameMoney = e.target.value;
        newObject.fieldMoney =
          newObject.fieldGameMoney === ""
            ? ""
            : Number(newObject.fieldGameMoney / 3).toFixed(0);
        changePrice(
          newObject.fieldGameMoney,
          setExchange,
          PROMOTIONS,
          "fieldGameMoney",
          false
        );
      }
      return newObject;
    });
  }

  function setValueField(price, percent) {
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
  }

  useEffect(() => {
    setExchange((prevState) => {
      const newObject = { ...prevState };
      return newObject;
    });
  }, [exchange.bonus]);

 async function buyCoins(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("id", dataUser.id);
    form.append("buyGameMoney", true);
    form.append("coins", exchange.bonus);
    form.append("monay", dataUser.coins);
    form.append("minusMonay", exchange.fieldMoney);
    form.append("server", exchange.server);
    form.append("serverId", exchange.serverId);
    let result = await funcPost(urlBd, form);
      if (result) {
        goHome("/");
        window.location.reload();
      };
  }

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
            <SelectThing
              className="buy-coins__select"
              text="Выберите сервер на котором хотите получить игровую валюту"
              options={listServers}
              setValue={setExchange}
              value={exchange}
              changeThing={["server", "serverId"]}
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
                  <form className="exchange">
                    <div className="exchange__wrapper">
                      <div className="exchange__body-field">
                        <input
                          className="exchange__input"
                          value={exchange.fieldMoney}
                          onChange={(e) => resultMoney(e)}
                          maxLength="9"
                          type="text"
                          name="money"
                        />
                      </div>
                      <div className="exchange__equals">
                        <span></span>
                      </div>
                      <div className="exchange__body-field">
                        <input
                          className="exchange__input"
                          value={exchange.fieldGameMoney}
                          onChange={(e) => resultMoney(e)}
                          maxLength="9"
                          type="text"
                          name="gameMoney"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <SelectOffer
                  offer={PROMOTIONS}
                  setValue={setExchange}
                  className="buy-coins__promotions"
                  func={setValueField}
                />
                <p className="buy-coins__results">
                  Итоговое количество игровой валюты - {exchange.bonus}
                </p>
                {exchange.server && (
                  <form
                    action={urlBd}
                    method="post"
                    onSubmit={buyCoins}
                    className="form-buy-coins"
                  >
                    <div className="form-buy-coins__wrapper">
                      <ButtonSend
                        className="form-buy-coins__btn"
                        text="Купить игровую валюту"
                      />
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
