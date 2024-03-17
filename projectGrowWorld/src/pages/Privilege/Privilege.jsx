import React from "react";
import "./Privilege.css";
import "./PrivilegeMediaStyle.css";
import UserHeader from "../../components/UserHeader/UserHeader";
import { useContext, useState } from "react";
import { UserData } from "../../contexts/user";
import { CABINET_ROUTE } from "../../routers/routes.jsx";
import SelectThing from "../../components/selectThing/SelectThing.jsx";
import { urlBd } from "../../configs/urls.js";
import ButtonSend from "../../components/ui/buttonSend/ButtonSend.jsx";
import { dataServers } from "../../contexts/dataServers.jsx";
import { useNavigate } from "react-router-dom";
import clearClass from "../../utils/clearClass.js";
import privilege1 from "../../assets/images/page/Privilege/privilege-image1.jpg";
import privilege2 from "../../assets/images/page/Privilege/privilege-image2.png";
import privilege3 from "../../assets/images/page/Privilege/privilege-image3.jpg";
import privilege4 from "../../assets/images/page/Privilege/privilege-image4.jpg";
import privilege5 from "../../assets/images/page/Privilege/privilege-image5.jpg";

const privilege = [
  {
    text: "vip",
    price: [120, 230, 380, 630],
    img: privilege1,
  },
  {
    text: "Premium",
    price: [250, 500, 830, 1020],
    img: privilege2,
  },
  {
    text: "Delux",
    price: [350, 650, 930, 1320],
    img: privilege3,
  },
  {
    text: "Extra",
    price: [660, 1250, 1630, 2120],
    img: privilege4,
  },
  {
    text: "Elixir",
    price: [920, 1650, 2530, 3709],
    img: privilege5,
  },
];

const timePrivilege = [
  {
    duration: 1,
    background: "rgb(255,160,122)",
  },
  {
    duration: 2,
    background: "rgb(233,150,122)",
  },
  {
    duration: 3,
    background: "rgb(205,92,92)",
  },
  {
    duration: "Навсегда",
    background: "rgb(165,42,42)",
  },
];

export default function Privilege(props) {
  let {} = props;
  const servers = useContext(dataServers);
  const listServers = servers[2];
  const data = useContext(UserData);
  const funcPost = data[0];
  const dataUser = data[2].user;

  const goHome = useNavigate();

  const [buyPrivilege, setBuyPrivilege] = useState({
    server: null,
    serverId: null,
    price: null,
    privilege: null,
    discountPrices: [],
    duration: null,
    finalPrice: null,
  });

  const discount = [1, 1.15, 1.25, 1.35];

  function resultPrice(e, price, text) {
    clearClass("privilege-selected");
    e.target.closest(".privilege__item").classList.toggle("privilege-selected");
    setBuyPrivilege((prevState) => {
      const newObject = { ...prevState };
      newObject.price = price;
      newObject.privilege = text;
      for (let i = 0; i < discount.length; i++) {
        newObject.discountPrices[i] = parseFloat(
          newObject.price[i] / discount[i]
        ).toFixed(0);
      }
      return newObject;
    });
  }

  function selectedDuration(e, item, index) {
    clearClass("duration-selected");
    e.target
      .closest(".time-privilege__item")
      .classList.toggle("duration-selected");
    setBuyPrivilege((prevState) => {
      const newObject = { ...prevState };
      newObject.duration = item.duration;
      newObject.finalPrice = newObject.discountPrices[index];
      return newObject;
    });
  }

  async function sendForm(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("buyPrivilege", true);
    form.append("id", dataUser.id);
    form.append("server", buyPrivilege.server);
    form.append("serverId", buyPrivilege.serverId);
    form.append("privilege", buyPrivilege.privilege);
    form.append("price", buyPrivilege.finalPrice);
    form.append("duration", buyPrivilege.duration);
    let result = await funcPost(urlBd, form);
    if (result) {
      goHome("/");
      window.location.reload();
    }
  }

  if (dataUser) {
    let { avatar } = dataUser;

    return (
      <main className="page">
        <section className="privilege">
          <UserHeader
            title="Личный кабинет"
            text="Покупка привилегий"
            avatar={avatar}
            path={CABINET_ROUTE}
          />
          <div className="privilege__content container-content">
            <SelectThing
              className="privilege__select"
              text="Выберите сервер на котором хотите купить привилегию"
              options={listServers}
              setValue={setBuyPrivilege}
              value={buyPrivilege}
              changeThing={["server", "serverId"]}
            />
            <div className="privilege__buy privilege__section">
              <h2 className="privilege__title title-section">Привилегии:</h2>
              <ul className="privilege__list">
                {privilege.map((item, _) => (
                  <li
                    onClick={(e) => resultPrice(e, item.price, item.text)}
                    className="privilege__item"
                    style={{ background: `url(${item.img}) center 100%/100% no-repeat` }}
                    key={item.text}
                  >
                    <div className="privilege__price">
                      {item.price[0]}
                      <span>₽</span>
                    </div>
                    <p className="privilege__privilege">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="privilege__time-privilege time-privilege privilege__section">
              <h3 className="privilege__title title-section">
                Выберите длительность првилегии:
              </h3>
              <ul className="time-privilege__list">
                {timePrivilege.map((item, index) => (
                  <li
                    key={item.duration}
                    className="time-privilege__item"
                    style={{ background: item.background }}
                    onClick={(e) => selectedDuration(e, item, index)}
                  >
                    <div className="time-privilege__discount">
                      {discount[index] === 1 ? (
                        <span>Без скидки</span>
                      ) : (
                        <span>
                          Скидка {String(discount[index]).slice(2, 4)}%
                        </span>
                      )}
                    </div>
                    <p className="time-privilege__time text-info">
                      {item.duration}{" "}
                      {item.duration === "Навсегда" ? null : "месяц"}
                    </p>
                    <p className="time-privilege__result-price">
                      {buyPrivilege.discountPrices[index] > 0
                        ? buyPrivilege.discountPrices[index]
                        : 0}{" "}
                      <span>₽</span>
                    </p>
                  </li>
                ))}
              </ul>
              {buyPrivilege.server && buyPrivilege.privilege ? (
                <form
                  className="privilege-form"
                  action={urlBd}
                  onSubmit={(e) => sendForm(e)}
                  method="post"
                >
                  <div className="privilege-form__wrapper">
                    <ButtonSend
                      className="privilege-form__btn"
                      text="Купить привилегию"
                    />
                  </div>
                </form>
              ) : null}
            </div>
          </div>
        </section>
      </main>
    );
  }
}
