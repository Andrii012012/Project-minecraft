import React from "react";
import "./seniorTeamProjectStyle.css";
import DataMemberTeam from "../DataMemberTeam/DataMemberTeam";

export default function SeniorTeamProject(props) {
  let { list, onCheckingProfile } = props;
  return (
    <ul className="team-project__body-item">
      {list.map((item, _) => {
        return (
          <>
            {item.servers.map((element, i) => {
              let { status } = element;

              if (status === "Разработчик" || status === "Куратор") {
                return (
                  <DataMemberTeam
                    key={i}
                    name={item.login}
                    avatar={item.avatar}
                    status={status}
                    onCheckingProfile={onCheckingProfile}
                  />
                );
              }
            })}
          </>
        );
      })}
    </ul>
  );
}
