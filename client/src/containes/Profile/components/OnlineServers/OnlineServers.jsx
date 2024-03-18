import React from "react";
import "./onlineServersStyle.css";
import "./onlineServersMedia.css";

export default function OnlineServers(props) {
  let { list } = props;
  return (
    <>
      {list.map((item, _) => {
        return (
          <li className="online-servers__item">
            <p className="online-servers__server-name">
              {item.server} <span>#{item.serverId}</span>
            </p>
            <p className="online-servers__online">{item.time} часов</p>
          </li>
        );
      })}
    </>
  );
}
