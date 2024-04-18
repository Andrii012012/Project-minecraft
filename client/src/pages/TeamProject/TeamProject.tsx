import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../styles/style.module.scss";
import { useEffect, useContext } from "react";
import { UsersDatas } from "../../contexts/users";
import { urlGetTeamProject } from "../../configs/urls";
import { useNavigate } from "react-router-dom";
import ServersMainCraft from "./components/ServersMainCraft/ServersMainCraft";
import SeniorTeamProject from "./components/SeniorTeamProject/SeniorTeamProject";
import Header from "./components/Header/Header";
import Branches from "./components/Branches/Branches";
import { IDataControlUsers } from "../../interface/interface";
import { IData } from "../../interface/interface";
import { TServers, TBranchesList } from "./interface/type";

const SERVERS: TServers[] = [
  { name: "TechnoMagic", id: 1 },
  { name: "TechnoMagic", id: 2 },
];

export default function TeamProject(): JSX.Element {
  const dataUsers = useContext<IDataControlUsers | null>(UsersDatas);
  const getDataUsers = dataUsers?.users;
  const getUsers = dataUsers?.getDataUsers;
  const onCheckingProfile = useNavigate();

  useEffect(() => {
    const dataForm = new FormData();
    getUsers && getUsers(urlGetTeamProject, dataForm);
  }, []);

  if (getDataUsers && getDataUsers.users) {
    const users: IData[] = getDataUsers.users;

    const arrayTeamProject: IData[] = [];

    for (let i = 0; i < users.length; i++) {
      if (Number(users[i].identifier) >= 8) {
        arrayTeamProject.push(users[i]);
      }
    }

    arrayTeamProject.sort(
      (a, b) => Number(a.identifier) - Number(b.identifier)
    );

    const branchesList: TBranchesList[] = [
      {
        title: "Техническая администрация",
        component: () => (
          <SeniorTeamProject
            onCheckingProfile={onCheckingProfile}
            list={arrayTeamProject}
          />
        ),
      },
      {
        title: "Внутриигровая администрация",
        component: () => (
          <ServersMainCraft
            list={SERVERS}
            listTeamProject={arrayTeamProject}
            onCheckingProfile={onCheckingProfile}
          />
        ),
      },
    ];

    if (arrayTeamProject.length > 0) {
      return (
        <main className={gStyles.page}>
          <section className={styles.teamProject}>
            <Header />
            <div className={`${styles.content} ${gStyles.containerContent}`}>
              <Branches list={branchesList} />
            </div>
          </section>
        </main>
      );
    } else {
      return <></>;
    }
  } else {
    return <></>;
  }
}
