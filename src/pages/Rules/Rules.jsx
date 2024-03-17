import React from "react";
import "./rulesStyle.css";
import "./rulesMedia.css";
import iconChat from "../../assets/images/page/Rules/rules-image-chat.svg";
import iconCommon from "../../assets/images/global/icon-common.svg";
import iconGame from "../../assets/images/global/icon-game.svg";
import iconTeamProject from "../../assets/images/global/icon-team-project.svg";
import RulesList from "./components/RulesList/RulesList.jsx";
import RulesNavigator from "./components/RulesNavigator/RulesNavigator.jsx";

const LIST_NAVIGATOR = [
  {
    className: "rules__item scroll-active",
    dataTp: "common",
    image: iconCommon,
    pointName: "Oбщие",
  },
  {
    className: "rules__item scroll-active",
    dataTp: "chat",
    image: iconChat,
    pointName: "Чат",
  },
  {
    className: "rules__item scroll-active",
    dataTp: "game-process",
    image: iconGame,
    pointName: "Игровые",
  },
  {
    className: "rules__item scroll-active",
    dataTp: "team",
    image: iconTeamProject,
    pointName: "команды",
  },
];

export default function Rules(props) {
  let {} = props;
  return (
    <main className="page">
      <section className="rules container-content">
        <div className="rules__header">
          <h1 className="rules__title title">Правила проекта</h1>
        </div>
        <div className="rules__content">
          <RulesNavigator list={LIST_NAVIGATOR} />
          <RulesList />
        </div>
      </section>
    </main>
  );
}
