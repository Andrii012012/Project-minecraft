import React from "react";
import "./monitoringStyle.css";
import "./monitoringMedia.css";
import iconMonitoring from "../../../../assets/images/component/sidebar/sidebar-icon-monitoring.svg";
import ShowStateServers from "../ShowStateServers/ShowStateServers";

const stateServers = [
  { serverName: "TechnoMagic", maxPlayers: 100, playersNow: 32 },
];

export default function Monitoring(props) {
  let {} = props;
  return (
    <section className="monitoring info-section">
      <div className="side-bar__name-section">
        <img className="side-bar__icon" src={iconMonitoring} alt="monitoring" />
        <p className="navigator__text">Мониторинг</p>
      </div>
      <ShowStateServers infoServers={stateServers} />
    </section>
  );
}
