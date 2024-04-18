import React from "react";
import styles from "./style.module.scss";
import DataMemberTeam from "../DataMemberTeam/DataMemberTeam";
import { NavigateFunction } from "react-router-dom";
import { IData } from "../../../../interface/interface";

interface IProps {
  list: IData[];
  onCheckingProfile: NavigateFunction;
}

export default function SeniorTeamProject(props: IProps): JSX.Element {
  let { list, onCheckingProfile } = props;
  return (
    <ul className={styles.item}>
      {list.map((item, _) => {
        if (item.servers) {
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
        } else {
          return <></>;
        }
      })}
    </ul>
  );
}
