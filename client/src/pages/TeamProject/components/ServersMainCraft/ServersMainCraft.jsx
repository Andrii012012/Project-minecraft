import React from "react";
import "./serversMainCraftStyle.css";
import "./serversMainCraftMedia.css";
import JuniorTeamProject from "../JuniorTeamProject/JuniorTeamProject";

export default function ServersMainCraft(props) {
  let { list, listTeamProject, onCheckingProfile } = props;
  return (
    <ul className="team-project__lists">
      {list.map((itemList, i) => {
        return (
          <li key={i} className="team-project__wrapper-item">
            <div className="team-project__sarver-name">
              {itemList.name} #{itemList.id}
            </div>
            <ul className="team-project__body-item">
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
