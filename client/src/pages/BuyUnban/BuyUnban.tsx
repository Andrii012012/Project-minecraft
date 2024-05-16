import styles from "./style.module.scss";
import gStyles from "../../styles/style.module.scss";
import UserHeader from "../../components/UserHeader/UserHeader";
import {useState } from "react";
import { CABINET_ROUTE } from "../../routers/routes";
import Selecting from "../../components/Selecting/Selecting";
import { urlBuyUnban } from "../../configs/urls";
import AccessClosed from "../../components/AccessClosed/AccessClosed";
import SendData from "./components/SendData/SendData";
import { IDataSend } from "./interface/interface";
import { TSetDataSend } from "./interface/type";
import { IServer } from "../../interface/interface";
import Error from "../Error/Error";
import { useAppSelector } from "../../hooks/useAppSelector";

export default function BuyUnban(): JSX.Element {
  const data = useAppSelector(state => state.user);

  const [dataSend, setDataSend] = useState<IDataSend>({
    server: "",
    serverId: "",
    price: 300,
  });

  if (data && data.user) {
    let { id, avatar, servers } = data.user;

    let isBan: IServer[] = [];

    (function checkBan() {
      if (Array.isArray(servers)) {
        for (let i = 0; i < servers.length; i++) {
          if (servers[i]["info_ban"]) {
            isBan.push({
              server_id: Number(servers[i]["server_id"]),
              server: String(servers[i]["server"]),
            });
          }
        }
      }
    })();

    if (isBan.length > 0) {
      return (
        <main className={gStyles.page}>
          <section className={styles.body}>
            <UserHeader
              avatar={avatar}
              title="Личный кабинет"
              text="Покупка разбана"
              path={CABINET_ROUTE}
            />
            <div className={`${styles.content} ${gStyles.containerContent}`}>
              <Selecting<TSetDataSend, IDataSend>
                className={styles.select}
                text="Выберите сервер на котором хотите купить привилегию"
                options={isBan}
                setValue={setDataSend}
                value={dataSend}
                changeKey={["server", "serverId"]}
              />
              <p className={`${styles.info} ${gStyles.textMedium}`}>
                Покупка разбана стоит - {dataSend.price} гривень
              </p>
              {dataSend.server && (
                <SendData
                  url={urlBuyUnban}
                  id={id}
                  data={dataSend}
                />
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
  } else {
    return <Error />;
  }
}
