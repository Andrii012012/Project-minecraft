import React from "react";
import "./showStateServersStyle.css";
import "./showStateServersMedia.css";

export default function ShowStateServers(props) {
  let { infoServers } = props;
  return (
    <ul className="lists-items">
      {infoServers.map((item, index) => (
        <li key={index} className="item-nav">
          <p className="monitoring__server-name">{item.serverName}</p>
          <div className="monitoring__count-players">
            <strong className="monitoring__state-players">
              {item.playersNow} из {item.maxPlayers}
            </strong>
          </div>
          <div className="monitoring__indicator-container">
            <div
              className="monitoring__indicator"
              style={{ width: `${item.playersNow}%` }}
            ></div>
          </div>
        </li>
      ))}
    </ul>
  );
}
