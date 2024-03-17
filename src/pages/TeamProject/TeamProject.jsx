import React from "react";
import "./teamProjectStyle.css";
import "./teamProjectMedia.css";
import { useEffect, useContext } from "react";
import { UsersDatas } from "../../contexts/users";
import { urlBd } from "../../configs/urls";
import { useNavigate } from "react-router-dom";
import ServersMainCraft from "./components/ServersMainCraft/ServersMainCraft";
import SeniorTeamProject from "./components/SeniorTeamProject/SeniorTeamProject";
import Header from "./components/Header/Header";
import Branches from "./components/Branches/Branches";

const SERVERS = [
  { name: "TechnoMagic", id: 1 },
  { name: "TechnoMagic", id: 2 },
];

export default function TeamProject(props) {
  const dataUsers = useContext(UsersDatas);
  const getDataUsers = dataUsers[2];
  const getUsers = dataUsers[0];
  const onCheckingProfile = useNavigate();

  useEffect(() => {
    const dataForm = new FormData();
    dataForm.append("status", true);
    getUsers(urlBd, dataForm);
  }, []);

  if (getDataUsers.users) {
    const users = getDataUsers.users;

    const arrayTeamProject = [];

    for (let i = 0; i < users.length; i++) {
      if (users[i].identifier >= 8) {
        arrayTeamProject.push(users[i]);
      }
    }

    arrayTeamProject.sort((a, b) => a.identifier - b.identifier);

    const branchesList = [
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
        <main className="page">
          <section className="team-project">
            <Header />
            <div className="team-project__content container-content">
              <Branches list={branchesList} />
            </div>
          </section>
        </main>
      );
    }
  }
}
