import React from "react";
import "./profileStyle.css";
import "./profileMedia.css";
import imageMain from "../../assets/images/page/Profile/profile-image-main.png";
import OnlineServers from "./components/OnlineServers/OnlineServers";
import UserData from "./components/UserData/UserData";
import ShowUserStatus from "./components/ShowUserStatus/ShowUserStatus";

export default function Profile(props) {
  let { userData } = props;

  if (userData) {
    let {
      avatar,
      login: name,
      servers = [],
      date,
      short_description,
    } = userData;

    if (servers === null) servers = [];

    const birthday =
      (new Date().getTime() - new Date(date)) / 1000 / 60 / 60 / 24;

    const days = birthday.toFixed(0);

    const infoUser = [
      {
        text: "С момента регистрации прошло:",
        info: `${days} дней`,
      },
      {
        text: "количество привилегий на серверах:",
        info: servers.length,
      },
    ];

    return (
      <main className="page">
        <section className="profile">
          <div className="profile__header">
            <img className="profile__image-main" src={imageMain} alt="" />
            <div className="profile__body-user">
              <div className="profile__avatar avatar">
                <img
                  src={require(`../../assets/upload/avatars/${avatar}`)}
                  alt=""
                />
              </div>
              <ShowUserStatus servers={servers} name={name} />
            </div>
          </div>
          <div className="profile__content container-content">
            <p className="profile__description">
              {short_description && short_description}
            </p>
            <ul className="user-data">
              <UserData list={infoUser} />
            </ul>
            <p className="profile__online">Онлайн на серверах:</p>
            <ul className="online-servers">
              <OnlineServers list={servers} />
            </ul>
          </div>
        </section>
      </main>
    );
  }
}
