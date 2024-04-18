import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../styles/style.module.scss";
import iconChat from "../../assets/images/page/Rules/rules-image-chat.svg";
import iconCommon from "../../assets/images/global/icon-common.svg";
import iconGame from "../../assets/images/global/icon-game.svg";
import iconTeamProject from "../../assets/images/global/icon-team-project.svg";
import RulesList from "./components/RulesList/RulesList";
import RulesNavigator from "./components/RulesNavigator/RulesNavigator";
import { TListNavigator } from "./interface/type";

const LIST_NAVIGATOR: TListNavigator[] = [
  {
    className: "item scrollActive",
    dataTp: "common",
    image: iconCommon,
    pointName: "Oбщие",
  },
  {
    className: "item scrollActive",
    dataTp: "chat",
    image: iconChat,
    pointName: "Чат",
  },
  {
    className: "item scrollActive",
    dataTp: "game-process",
    image: iconGame,
    pointName: "Игровые",
  },
  {
    className: "item scrollActive",
    dataTp: "team",
    image: iconTeamProject,
    pointName: "команды",
  },
];

export default function Rules(): JSX.Element {
  return (
    <main className={gStyles.page}>
      <section className={`${styles.rules} ${gStyles.containerContent}`}>
        <div className={styles.header}>
          <h1 className={`${styles.title} ${gStyles.titleBig}`}>Правила проекта</h1>
        </div>
        <div className={styles.content}>
          <RulesNavigator list={LIST_NAVIGATOR} />
          <RulesList />
        </div>
      </section>
    </main>
  );
}
