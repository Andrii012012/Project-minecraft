import React from "react";
import styles from "./style.module.scss";
import { useRef } from "react";
import UserListStatuses from "../UserListStatuses/UserListStatuses";
import { IDataServer } from "../../../../interface/interface";

interface IProps {
  servers: IDataServer[];
  name: string;
}

export default function ShowUserStatus(props: IProps): JSX.Element {
  let { servers, name } = props;

  const statusRef = useRef<HTMLParagraphElement>(null);

  function onShowStatus(): void {
    if (statusRef.current) {
      if (servers.length > 1) {
        statusRef.current.classList.add(styles.activeStatus);
      }
    }
  }

  function onHiddenStatus(): void {
    if (statusRef.current) {
      statusRef.current.classList.remove(styles.activeStatus);
    }
  }
  if (servers.length > 0) {
    let { status, server, server_id } = servers[0];

    return (
      <div className={styles.bodyUser}>
        <p className={styles.userName}>{name}</p>
        {servers.length > 0 ? (
          <p
            ref={statusRef}
            onMouseEnter={onShowStatus}
            onMouseLeave={onHiddenStatus}
            className={styles.status}
          >
            <span>{status}</span>
            {server} #{server_id}
            <ul className={styles.statuses}>
              <UserListStatuses list={servers} />
            </ul>
          </p>
        ) : (
          <p className={styles.status}>
            <span>Пользователь сайта</span>
          </p>
        )}
      </div>
    );
  } else {
    return <></>;
  }
}
