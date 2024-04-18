import React from "react";
import styles from "./style.module.scss";
import DataMemberTeam from "../DataMemberTeam/DataMemberTeam";
import { NavigateFunction } from "react-router-dom";
import { IData, IDataServer } from "../../../../interface/interface";

interface IProps {
  list: IData[];
  server: string | number;
  serverId: string | number;
  onCheckingProfile: NavigateFunction;
}

export default function JuniorTeamProject(props: IProps): JSX.Element {
  let { list, server, serverId, onCheckingProfile } = props;
  return (
    <>
      {list.map((item: IData, index: number): JSX.Element => {
        if (item && item.servers) {
          return (
            <React.Fragment key={index}>
              {item.servers.map((element: IDataServer, i: number): any => {
                let {
                  server: serverName,
                  server_id,
                  status,
                  is_team,
                } = element;
                const booleanValue = Boolean(Number(is_team));
                if (
                  serverName === server &&
                  Number(serverId) == Number(server_id) &&
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
        } else {
          return <></>;
        }
      })}
    </>
  );
}
