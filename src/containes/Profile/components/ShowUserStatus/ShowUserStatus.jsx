import React from "react";
import "./showUserStatusStyle.css";
import "./showUserStatusMedia.css";
import { useRef } from "react";
import UserListStatuses from "../UserListStatuses/UserListStatuses";

export default function ShowUserStatus(props) {
  let { servers, name } = props;

  const statusRef = useRef(null);

  let { status, server, serverId } = servers.length > 0 && servers[0];

  function onShowStatus(e) {
    if (statusRef.current) {
      if (servers.length > 1) {
        statusRef.current.classList.add("active-status");
      }
    }
  }

  function onHiddenStatus(e) {
    if (statusRef.current) {
      statusRef.current.classList.remove("active-status");
    }
  }

  return (
    <div className="profile__body-user-info">
      <p className="profile__username">{name}</p>
      {servers.length > 0 ? (
        <p
          ref={statusRef}
          onMouseEnter={onShowStatus}
          onMouseLeave={onHiddenStatus}
          className="profile__status"
        >
          <span>{status}</span>
          {server} #{serverId}
          <ul className="profile__statuses">
            <UserListStatuses list={servers} />
          </ul>
        </p>
      ) : (
        <p className="profile__status">
          <span>Пользователь сайта</span>
        </p>
      )}
    </div>
  );
}
