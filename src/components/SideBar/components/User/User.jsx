import React from "react";
import "./userStyle.css";
import "./userMedia.css";
import { Link } from "react-router-dom";
import iconMonay from "../../../../assets/images/component/sidebar/sidebar-icon-monay.svg";
import {
  CABINET_PAY_ROUTE,
  PROFILE_ROUTE,
  SETTINGSACCOUNT_ROUTE,
  CABINET_ROUTE,
} from "../../../../routers/routes";
import ListMenuUser from "../ListMenuUser/ListMenuUser";

const USER_ACCOUNT_NAVIGATOR_ITEMS = [
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

export default function User(props) {
  let { leave, getArrayDataUser } = props;

  let { user } = getArrayDataUser;

  return (
    <div className="user">
      <div className="user__header">
        <div className="user__avatar avatar">
          <img
            src={require(`../../../../assets/upload/avatars/${user.avatar}`)}
            style={{ width: "80px", height: "80px" }}
            alt=""
          />
        </div>
        <div className="user__greetings">
          <p className="user__text">Привет,</p>
          <p className="user__name">{user.login}</p>
        </div>
      </div>
      <div className="user__body-balance">
        <div className="user__icon-coins user-body__monay-section">
          <img src={iconMonay} />
        </div>
        <div className="user__body-info-monay user-body__monay-section">
          <p className="user__coins">{user.coins} руб</p>
          <Link
            className="user__btn-monay"
            style={{ color: "#fff" }}
            to={CABINET_PAY_ROUTE}
          >
            Пополнить
          </Link>
        </div>
        <div className="user__body-info-bonus user-body__monay-section">
          <p className="user__coins">{!user.bonus && 0} Бонусы</p>
          <Link className="user__btn-monay" style={{ color: "#fff" }} to={""}>
            Получить
          </Link>
        </div>
      </div>
      <div className="user__navigator">
        <ul className="user__lists">
          <ListMenuUser list={USER_ACCOUNT_NAVIGATOR_ITEMS} />
          <li className="item-nav">
            <button
              type="button"
              className="user_btn"
              onClick={() => leave((getArrayDataUser.isActive = false))}
            >
              Выйти
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
