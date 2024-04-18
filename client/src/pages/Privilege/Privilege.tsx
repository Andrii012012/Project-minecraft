import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../styles/style.module.scss";
import UserHeader from "../../components/UserHeader/UserHeader";
import { useContext, useState } from "react";
import { UserData } from "../../contexts/user";
import { CABINET_ROUTE } from "../../routers/routes";
import Selecting from "../../components/Selecting/Selecting";
import { dataServers } from "../../contexts/dataServers";
import clearClass from "../../utils/clearClass";
import PrivilegeList from "./components/PrivilegeList/PrivilegeList";
import DurationPrivilegeList from "./components/DurationPrivilegeList/DurationPrivilegeList";
import SendData from "./components/SendData/SendData";
import {
  PRIVILEGES,
  DISCOUNT,
  DURATION_PRIVILEGE,
  IDuration,
} from "../../constants/donate";
import { urlBuyPrivilege } from "../../configs/urls";
import { IStatBuyPrivilege } from "./interface/interface";
import { TSetStatePrivilege } from "./interface/type";
import { IDataControl, IServer } from "../../interface/interface";
import Error from "../Error/Error";

export default function Privilege(): JSX.Element {
  const servers = useContext<IServer[] | null>(dataServers);
  const data = useContext<IDataControl | null>(UserData);

  const [buyPrivilege, setBuyPrivilege] = useState<IStatBuyPrivilege>({
    server: "",
    serverId: "",
    price: 0,
    privilege: "",
    discountPrices: [],
    duration: 0,
    finalPrice: 0,
  });

  function onSelectedDuration(
    e: React.MouseEvent<HTMLLIElement>,
    item: IDuration,
    index: number
  ) {
    if (e.target && e.target instanceof Element) {
      clearClass(`${styles.durationSelected}`);
      e.target
        .closest(`.${styles.item}`)!
        .classList.toggle(`${styles.durationSelected}`);
    }
    setBuyPrivilege((prevState) => {
      const newObject = { ...prevState };
      newObject.duration = item.duration;
      if (newObject.discountPrices && newObject.discountPrices[index]) {
        newObject.finalPrice = Number(newObject.discountPrices[index]);
      }
      return newObject;
    });
  }

  function onResultPrice(
    e: React.MouseEvent<HTMLLIElement>,
    price: number | number[],
    text: string | number
  ) {
    if (e.target && e.target instanceof Element) {
      clearClass(`${styles.privilegeSelected}`);
      e.target
        .closest(`.${styles.item}`)!
        .classList.toggle(`${styles.privilegeSelected}`);
    }

    setBuyPrivilege((prevState) => {
      const newObject = { ...prevState };
      newObject.price = price;
      newObject.privilege = String(text);
      for (let i = 0; i < DISCOUNT.length; i++) {
        if (
          Array.isArray(newObject.discountPrices) &&
          Array.isArray(newObject.price)
        ) {
          newObject.discountPrices[i] = Number(
            parseFloat(String(newObject.price[i] / DISCOUNT[i])).toFixed(0)
          );
        }
      }
      return newObject;
    });
  }

  if (data && data.data.user && servers) {
    const listServers = servers;
    const onFuncSend = data.setDataUser;
    const dataUser = data.data.user;

    return (
      <main className={gStyles.page}>
        <section className={styles.privilege}>
          <UserHeader
            title="Личный кабинет"
            text="Покупка привилегий"
            avatar={dataUser ? dataUser.avatar : ""}
            path={CABINET_ROUTE}
          />
          <div className={`${styles.content} ${gStyles.containerContent}`}>
            <Selecting<TSetStatePrivilege, IStatBuyPrivilege>
              className={styles.select}
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
                url={urlBuyPrivilege}
                dataUser={dataUser}
              />
            ) : null}
          </div>
        </section>
      </main>
    );
  } else {
    return <Error/>;
  }
}
