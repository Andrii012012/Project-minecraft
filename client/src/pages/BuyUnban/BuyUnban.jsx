import React from "react";
import "./buyUnbanStyle.css";
import "./buyUnbanMedia.css";
import UserHeader from "../../components/UserHeader/UserHeader";
import { useContext, useState } from "react";
import { UserData } from "../../contexts/user";
import { CABINET_ROUTE } from "../../routers/routes";
import Selecting from "../../components/Selecting/Selecting";
import { urlBuyUnban } from "../../configs/urls";
import AccessClosed from "../../components/AccessClosed/AccessClosed";
import { useNavigate } from "react-router-dom";
import SendData from "./components/SendData/SendData";

export default function BuyUnban(props) {
  let {} = props;
  const data = useContext(UserData);
  const onFuncSend = data[0];
  const dataUser = data[2].user;
  const goHome = useNavigate();

  const [dataSend, setDataSend] = useState({
    server: "",
    serverId: "",
    unban: 300,
  });

  if (dataUser) {
    let { id, avatar, servers } = dataUser;

    let isBan = [];

    for (let i = 0; i < servers.length; i++) {
      if (servers[i]["info_ban"]) {
        isBan.push(servers[i]);
      }
    }

    if (isBan.length > 0) {
      return (
        <main className="page">
          <section className="buy-unban">
            <UserHeader
              avatar={avatar}
              title="Личный кабинет"
              text="Покупка разбана"
              path={CABINET_ROUTE}
            />
            <div className="buy-unban__content container-content">
              <Selecting
                className="buy-unban__select"
                text="Выберите сервер на котором хотите купить привилегию"
                options={isBan}
                setValue={setDataSend}
                value={dataSend}
                changeKey={["server", "serverId"]}
              />
              <p className="buy-unban__info">
                Покупка разбана стоит - {dataSend.unban} гривен
              </p>
              {dataSend.server && (
                <SendData url={urlBuyUnban} id={id} goHome={goHome} data={dataSend} onFuncSend={onFuncSend}/>
              )}
            </div>
          </section>
        </main>
      );
    } else {
      return (
        <AccessClosed
          avatar={avatar}
          title="Личный кабинет"
          text="Покупка разбана"
          path={CABINET_ROUTE}
        />
      );
    }
  }
}
