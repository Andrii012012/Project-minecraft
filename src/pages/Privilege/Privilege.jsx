import React from "react";
import "./privilegeStyle.css";
import "./privilegeMedia.css";
import UserHeader from "../../components/UserHeader/UserHeader";
import { useContext, useState } from "react";
import { UserData } from "../../contexts/user";
import { CABINET_ROUTE } from "../../routers/routes.jsx";
import Selecting from "../../components/Selecting/Selecting.jsx";
import { dataServers } from "../../contexts/dataServers.jsx";
import clearClass from "../../utils/clearClass.js";
import PrivilegeList from "./components/PrivilegeList/PrivilegeList.jsx";
import DurationPrivilegeList from "./components/DurationPrivilegeList/DurationPrivilegeList.jsx";
import SendData from "./components/SendData/SendData.jsx";
import {
  PRIVILEGES,
  DISCOUNT,
  DURATION_PRIVILEGE,
} from "../../constants/donate.js";
import { urlBd } from "../../configs/urls.js";

export default function Privilege(props) {
  let {} = props;
  const servers = useContext(dataServers);
  const listServers = servers[2];
  const data = useContext(UserData);
  const onFuncSend = data[0];
  const dataUser = data[2].user;

  const [buyPrivilege, setBuyPrivilege] = useState({
    server: null,
    serverId: null,
    price: null,
    privilege: null,
    discountPrices: [],
    duration: null,
    finalPrice: null,
  });

  function onSelectedDuration(e, item, index) {
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

  function onResultPrice(e, price, text) {
    clearClass("privilege-selected");
    e.target.closest(".privilege__item").classList.toggle("privilege-selected");
    setBuyPrivilege((prevState) => {
      const newObject = { ...prevState };
      newObject.price = price;
      newObject.privilege = text;
      for (let i = 0; i < DISCOUNT.length; i++) {
        newObject.discountPrices[i] = parseFloat(
          newObject.price[i] / DISCOUNT[i]
        ).toFixed(0);
      }
      return newObject;
    });
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
            <Selecting
              className="privilege__select"
              text="Выберите сервер на котором хотите купить привилегию"
              options={listServers}
              setValue={setBuyPrivilege}
              value={buyPrivilege}
              changeKey={["server", "serverId"]}
            />
            <PrivilegeList onCalc={onResultPrice} list={PRIVILEGES} />
            <DurationPrivilegeList
              list={DURATION_PRIVILEGE}
              onSelectedDuration={onSelectedDuration}
              discount={DISCOUNT}
              value={buyPrivilege}
            />
            {buyPrivilege.server && buyPrivilege.privilege ? (
              <SendData
                onFuncSend={onFuncSend}
                data={buyPrivilege}
                url={urlBd}
                dataUser={dataUser}
              />
            ) : null}
          </div>
        </section>
      </main>
    );
  }
}
