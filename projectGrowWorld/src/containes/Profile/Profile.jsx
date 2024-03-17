import React from "react";
import "./Profile.css";
import "./ProfileMediaStyle.css";
import { useRef } from "react";
import imageMain from "../../assets/images/page/Profile/profile-image-main.png";

export default function Profile(props) {
  let { userData } = props;

  const statusRef = useRef(null);
  if (userData) {
    let { avatar, login, servers = [], date, shortDescription } = userData.user;

    if(servers === null) servers = [];

    let { status, server, serverId } = servers.length > 0 && servers[0];

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

    function showStatus(e) {
      if (statusRef.current) {
        if (servers.length > 1) {
          statusRef.current.classList.add("active-status");
        }
      }
    }

    function hiddenStatus(e) {
      if (statusRef.current) {
        statusRef.current.classList.remove("active-status");
      }
    }

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
              <div className="profile__body-user-info">
                <p className="profile__username">{login}</p>
                {servers.length > 0 ? (
                  <p
                    ref={statusRef}
                    onMouseEnter={showStatus}
                    onMouseLeave={hiddenStatus}
                    className="profile__status"
                  >
                    <span>{status}</span>
                    {server} #{serverId}
                    <ul className="profile__statuses">
                      {servers.map((item, index) => {
                        if (index > 0)
                          return (
                            <li className="profile__status-item">
                              {item.status} <span>{item.server}</span>#
                              {item.serverId}
                            </li>
                          );
                      })}
                    </ul>
                  </p>
                ) : (
                  <p className="profile__status">
                    <span>Пользователь сайта</span>
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="profile__content container-content">
            <p className="profile__description">
              {shortDescription && shortDescription}
            </p>
            <ul className="user-data">
              {infoUser.map((item, index) => (
                <li key={index} className="user-data__item">
                  <p className="user-data__text">{item.text}</p>
                  <p className="user-data__data">{item.info}</p>
                </li>
              ))}
            </ul>
            <p className="profile__online">Онлайн на серверах:</p>
            <ul className="online-servers">
              {servers.map((item, _) => {
                return (
                  <li className="online-servers__item">
                    <p className="online-servers__server-name">
                      {item.server} <span>#{item.serverId}</span>
                    </p>
                    <p className="online-servers__online">{item.time} часов</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
    );
  }
}
