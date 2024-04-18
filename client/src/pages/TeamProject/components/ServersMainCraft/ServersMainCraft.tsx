import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../../styles/style.module.scss";
import JuniorTeamProject from "../JuniorTeamProject/JuniorTeamProject";
import { IData } from "../../../../interface/interface";
import { NavigateFunction } from "react-router-dom";
import { TServers } from "../../interface/type";

interface IProps {
  list: TServers[];
  listTeamProject: IData[];
  onCheckingProfile: NavigateFunction;
}

export default function ServersMainCraft(props: IProps): JSX.Element {
  let { list, listTeamProject, onCheckingProfile } = props;
  return (
    <ul className={styles.list}>
      {list.map((itemList: TServers, i: number) => {
        return (
          <li key={i} className={styles.item}>
            <div className={`${styles.sarverName} ${gStyles.titleSmall}`}>
              {itemList.name} #{itemList.id}
            </div>
            <ul className={styles.listTeam}>
              <JuniorTeamProject
                server={itemList.name}
                serverId={itemList.id}
                list={listTeamProject}
                onCheckingProfile={onCheckingProfile}
              />
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
