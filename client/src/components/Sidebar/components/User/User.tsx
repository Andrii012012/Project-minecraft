import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../../styles/style.module.scss";
import { Link } from "react-router-dom";
import iconMonay from "../../../../assets/images/component/sidebar/sidebar-icon-monay.svg";
import {
  CABINET_PAY_ROUTE,
  PROFILE_ROUTE,
  SETTINGSACCOUNT_ROUTE,
  CABINET_ROUTE,
  HOME_ROUTE,
} from "../../../../routers/routes";
import ListMenuUser from "../ListMenuUser/ListMenuUser";
import { IData, IObjectDataServer } from "../../../../interface/interface";

interface IProps {
  leave: () => void;
  objectDataServer: IObjectDataServer;
}

type TUser = {
  path: string;
  text: string;
};

const USER_ACCOUNT_NAVIGATOR_ITEMS: Array<TUser> = [
  {
    path: CABINET_ROUTE,
    text: "Личный кабинет",
  },
  {
    path: PROFILE_ROUTE,
    text: "Профиль",
  },
  {
    path: SETTINGSACCOUNT_ROUTE,
    text: "Настройки",
  },
];

export default function User(props: IProps): JSX.Element {
  let { leave, objectDataServer } = props;

  if (objectDataServer.user) {
    const user: IData = objectDataServer.user;
    return (
      <div className={styles.user}>
        <div className={styles.header}>
          <div className={`${styles.userAvatar} ${styles.avatar}`}>
            <img
              src={require(`../../../../assets/upload/avatars/${user.avatar}`)}
              style={{ width: "80px", height: "80px" }}
              alt=""
            />
          </div>
          <div className={styles.greetings}>
            <p className={`${styles.text} ${gStyles.textMedium}`}>Привет,</p>
            <p className={`${styles.name} ${gStyles.textMedium}`}>{user.login}</p>
          </div>
        </div>
        <div className={styles.bodyBalance}>
          <div className={`${styles.iconCoins} ${styles.monaySection}`}>
            <img src={iconMonay} />
          </div>
          <div className={styles.bodyInfoBalance}>
            <p className={styles.textBalance}>{user.coins} грн</p>
            <Link
              className={styles.btnMonay}
              style={{ color: "#fff" }}
              to={CABINET_PAY_ROUTE}
            >
              Пополнить
            </Link>
          </div>
          <div className={styles.bodyInfoBalance}>
            <p className={styles.textBalance}>{user.bonus} Бонусы</p>
            <Link
              className={styles.btnMonay}
              style={{ color: "#fff" }}
              to={HOME_ROUTE}
            >
              Получить
            </Link>
          </div>
        </div>
        <div className={styles.navigator}>
          <ul className={styles.list}>
            <ListMenuUser list={USER_ACCOUNT_NAVIGATOR_ITEMS} />
            <li className={styles.item}>
              <button type="button" className={styles.btnLeave} onClick={leave}>
                Выйти
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
