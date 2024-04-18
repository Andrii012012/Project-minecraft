import React from "react";
import styles from './styles.module.scss';
import gStyles from '../../styles/style.module.scss';
import { useContext } from "react";
import { UserData } from "../../contexts/user";
import imageBuyMonay from "../../assets/images/page/Cabinet/cabinet-image-buy-monay.svg";
import imageBuyPrivilege from "../../assets/images/page/Cabinet/cabinet-image-buy-privilege.svg";
import imageBuyGameMonay from "../../assets/images/page/Cabinet/cabinet-image-buy-game-monay.svg";
import imageBuyUnban from "../../assets/images/page/Cabinet/cabinet-image-buy-unban.svg";
import UserHeader from "../../components/UserHeader/UserHeader";
import {
  CABINET_PAY_ROUTE,
  CABINET_GROUP_ROUTE,
  CABINET_BANK_ROUTE,
  CABINET_BUY_UNBAN_ROUTE,
} from "../../routers/routes";
import ListOpportunity from "./components/ListOpportunity/ListOpportunity";
import { IData, IDataControl } from "../../interface/interface";
import Error from "../Error/Error";



type TItem = Record<"img" | "text" | "path", string>;
type TDataUser = Record<"avatar" | "login", string>;

const itemsOpportunity: Array<TItem> = [
  { img: imageBuyMonay, text: "Пополнение баланса", path: CABINET_PAY_ROUTE },
  {
    img: imageBuyPrivilege,
    text: "Покупка привилегий",
    path: CABINET_GROUP_ROUTE,
  },
  { img: imageBuyGameMonay, text: "Покупка коинов", path: CABINET_BANK_ROUTE },
  {
    img: imageBuyUnban,
    text: "Покупка разбана",
    path: CABINET_BUY_UNBAN_ROUTE,
  },
];

export default function Cabinet(): JSX.Element {
  const data = useContext<IDataControl | null>(UserData);

  if (data && data.data.user) {
    const dataUser: IData | null = data.data.user;
    if (dataUser) {
      let { avatar, login }: TDataUser = dataUser;
      return (
        <main className={gStyles.page}>
          <section className={styles.cabinet}>
            <UserHeader
              title="Личный кабинет"
              text="Добро пожаловать,"
              name={login}
              avatar={avatar}
            />
            <div className={`${styles.content} ${gStyles.containerContent}`}>
              <ul className={styles.list}>
                <ListOpportunity list={itemsOpportunity} />
              </ul>
            </div>
          </section>
        </main>
      );
    } else {
      return <Error/>
    }
  } else {
    return <></>;
  }
}
