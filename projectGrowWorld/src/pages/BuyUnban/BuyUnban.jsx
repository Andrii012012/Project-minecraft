import React from "react";
import "./BuyUnban.css";
import "./BuyUnbanMediaStyle.css";
import UserHeader from "../../components/UserHeader/UserHeader";
import { useContext, useState } from "react";
import { UserData } from "../../contexts/user";
import { CABINET_ROUTE } from "../../routers/routes";
import SelectThing from "../../components/selectThing/SelectThing";
import ButtonSend from "../../components/ui/buttonSend/ButtonSend";
import { urlBd } from "../../configs/urls";
import AccessClosed from "../../components/accessClosed/AccessClosed";
import { useNavigate } from "react-router-dom";

export default function BuyUnban(props) {
  let {} = props;
  const data = useContext(UserData);
  const funcPost = data[0];
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
      if (servers[i]["infoBan"]) {
        isBan.push(servers[i]);
      }
    }

    async function onSendData(e) {
      e.preventDefault();
      const form = new FormData();
      form.append("buyUnban", true);
      form.append("id", id);
      form.append("server", dataSend.server);
      form.append("serverId", dataSend.serverId);
      form.append("costUnban", dataSend.unban);
      let result = await funcPost(urlBd, form);

      if (result) {
        goHome("/");
        window.location.reload();
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
              <SelectThing
                className="buy-unban__select"
                text="Выберите сервер на котором хотите купить привилегию"
                options={isBan}
                setValue={setDataSend}
                value={dataSend}
                changeThing={["server", "serverId"]}
              />
              <p className="buy-unban__info">
                Покупка разбана стоит - {dataSend.unban} рублей
              </p>
              {dataSend.server && (
                <form
                  action={urlBd}
                  method="post"
                  onSubmit={(e) => onSendData(e)}
                  className="form-buy-unban"
                >
                  <div className="form-buy-unban__wrapper">
                    <ButtonSend
                      className="form-buy-unban__btn"
                      text="Купить разбан"
                    />
                  </div>
                </form>
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
