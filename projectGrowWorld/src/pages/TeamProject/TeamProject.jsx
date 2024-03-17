import React from "react";
import "./TeamProject.css";
import "./TeamProjectMediaStyle.css";
import imageMain from "../../assets/images/global/minacraft-image-main.jpg";
import iconTeamProject from "../../assets/images/global/icon-team-project.svg";
import { useEffect, useContext } from "react";
import { UsersDatas } from "../../contexts/users";
import { urlBd } from "../../configs/urls";
import { useNavigate } from "react-router-dom";

export default function TeamProject(props) {
  const dataUsers = useContext(UsersDatas);
  const getDataUsers = dataUsers[2];
  const getUsers = dataUsers[0];
  const goProfile = useNavigate();

  useEffect(() => {
    const dataForm = new FormData();
    dataForm.append("status", true);
    getUsers(urlBd, dataForm);
  }, []);

  if (getDataUsers.users) {
    const users = getDataUsers.users;

    const arrayTeamProject = [];

    const servers = [
      { name: "TechnoMagic", id: 1 },
      { name: "TechnoMagic", id: 2 },
    ];

    for (let i = 0; i < users.length; i++) {
      if (users[i].identifier >= 8) {
        arrayTeamProject.push(users[i]);
      }
    }

    arrayTeamProject.sort((a, b) => a.identifier - b.identifier);

    if (arrayTeamProject.length > 0) {
      return (
        <main className="page">
          <section className="team-project">
            <div className="team-project__header">
              <img className='team-project__image' src={imageMain} alt="image" />
              <div className="team-project__body-info">
                <img className='team-project__icon-sign' src={iconTeamProject} alt="teamProject" />
                <div className="team-project__body">
                  <h1 className="team-project__title title">Команда проекта</h1>
                  <p className="team-project__subtitle subtitle">
                    Здесь вы можете посмотреть к кому обращаться в случаи чего
                  </p>
                </div>
              </div>
            </div>
            <div className="team-project__content container-content">
                <h2 className="team-project__section-name title-section">
                  Техническая администрация
                </h2>
                <ul className="team-project__body-item">
                  {arrayTeamProject.map((item, index) => {
                    return (
                      <>
                        {item.servers.map((element, i) => {
                          let { status } = element;

                          if (
                            status === "Разработчик" ||
                            status === "Куратор"
                          ) {
                            return (
                              <li
                                key={i}
                                onClick={() =>
                                  goProfile(`/profile/${item.login}`)
                                }
                                className="team-project__item"
                              >
                                <div className="team-project__icon">
                                  <img
                                    src={require(`../../assets/upload/avatars/${item.avatar}`)}
                                    alt=""
                                  />
                                </div>
                                <div className="team-project__info">
                                  <p className="team-project__name">
                                    {item.login}
                                  </p>
                                  <p className="team-project__status">
                                    {status}
                                  </p>
                                </div>
                              </li>
                            );
                          }
                        })}
                      </>
                    );
                  })}
                {/* </li> */}
              </ul>
              <section className="team-project__team">
                <h2 className="team-project__section-name title-section">
                  Внутриигровая администрация
                </h2>
                <ul className="team-project__lists">
                  {servers.map((itemList, i) => {
                    return (
                      <li key={i} className="team-project__wrapper-item">
                        <div className="team-project__sarver-name">
                          {itemList.name} #{itemList.id}
                        </div>
                        <ul className="team-project__body-item">
                          {arrayTeamProject.map((item, index) => {
                            return (
                              <>
                                {item.servers.map((element, i) => {
                                  let {
                                    server: serverName,
                                    serverId,
                                    status,
                                    isTeam,
                                  } = element;
                                  const booleanValue = Boolean(Number(isTeam));
                                  if (
                                    serverName === itemList.name &&
                                    Number(serverId) == itemList.id &&
                                    status !== "Разработчик" &&
                                    status !== "Куратор" &&
                                    booleanValue
                                  ) {
                                    return (
                                      <li
                                        key={i}
                                        onClick={() =>
                                          goProfile(`/profile/${item.login}`)
                                        }
                                        className="team-project__item"
                                      >
                                        <div className="team-project__icon">
                                          <img
                                            src={require(`../../assets/upload/avatars/${item.avatar}`)}
                                            alt=""
                                          />
                                        </div>
                                        <div className="team-project__info">
                                          <p className="team-project__name">
                                            {item.login}
                                          </p>
                                          <p className="team-project__status">
                                            {status}
                                          </p>
                                        </div>
                                      </li>
                                    );
                                  }
                                })}
                              </>
                            );
                          })}
                          ;
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </section>
            </div>
          </section>
        </main>
      );
    }
  }
}
