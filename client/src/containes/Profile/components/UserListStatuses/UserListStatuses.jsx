import React from "react";
import "./userListStatusesStyle.css";
import "./userListStatusesMedia.css";

export default function UserListStatuses(props) {
  let { list } = props;
  return (
    <>
      {list.map((item, index) => {
        if (index > 0)
          return (
            <li className="profile__status-item">
              {item.status} <span>{item.server}</span>#{item.serverId}
            </li>
          );
      })}
    </>
  );
}
