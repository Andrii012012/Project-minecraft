import React from "react";
import "./juniorTeamProjectStyle.css";
import DataMemberTeam from "../DataMemberTeam/DataMemberTeam";

export default function JuniorTeamProject(props) {
  let { list, server, serverid, onCheckingProfile } = props;
  return (
    <>
      {list.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {item.servers.map((element, i) => {
              let { server: serverName, serverId, status, isTeam } = element;
              const booleanValue = Boolean(Number(isTeam));
              if (
                serverName === server &&
                Number(serverId) == serverid &&
                status !== "Разработчик" &&
                status !== "Куратор" &&
                booleanValue
              ) {
                <DataMemberTeam
                  key={i}
                  avatar={item.avatar}
                  name={item.login}
                  status={status}
                  onCheckingProfile={onCheckingProfile}
                />;
              }
            })}
          </React.Fragment>
        );
      })}
    </>
  );
}
