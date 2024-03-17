import React from "react";
import "./Cabinet.css";
import { useContext } from "react";
import { UserData } from "../../contexts/user";
import imageBuyMonay from "../../assets/images/page/Cabinet/cabinet-image-buy-monay.svg";
import imageBuyPrivilege from '../../assets/images/page/Cabinet/cabinet-image-buy-privilege.svg';
import imageBuyGameMonay from '../../assets/images/page/Cabinet/cabinet-image-buy-game-monay.svg';
import imageBuyUnban from '../../assets/images/page/Cabinet/cabinet-image-buy-unban.svg';
import UserHeader from "../../components/UserHeader/UserHeader";
import { Link } from "react-router-dom";
import { CABINET_PAY_ROUTE, CABINET_GROUP_ROUTE, CABINET_BANK_ROUTE, CABINET_BUY_UNBAN_ROUTE } from "../../routers/routes";

export default function Cabinet(props) {
  const data = useContext(UserData);
  const dataUser = data[2].user;

  const itemsOpportunity = [
    { img: imageBuyMonay, text: "Пополнение баланса", path: CABINET_PAY_ROUTE, },
    { img: imageBuyPrivilege, text: "Покупка привилегий", path: CABINET_GROUP_ROUTE, },
    { img: imageBuyGameMonay, text: "Покупка коинов", path: CABINET_BANK_ROUTE, },
    { img: imageBuyUnban, text: 'Покупка разбана', path: CABINET_BUY_UNBAN_ROUTE, },
  ];

  if (dataUser) {
    let { avatar, login: name } = dataUser;
    return (
      <main className="page">
        <section className="cabinet">
          <UserHeader
            title="Личный кабинет"
            text="Добро пожаловать,"
            name={name}
            avatar={avatar}
          />
          <div className="cabinet__content container-content">
            <ul className="list-opportunity">
              {itemsOpportunity.map((item, _) => (
                <li className="list-opportunity__item">
                  <Link to={item.path} className='list-opportunity__body'>
                    <div className="list-opportunity__icon">
                      <img src={item.img} alt="" />
                    </div>
                    <p className="list-opportunity__text">{item.text}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    );
  }
}
