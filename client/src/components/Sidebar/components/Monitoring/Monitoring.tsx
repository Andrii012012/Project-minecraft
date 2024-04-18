import React from "react";
import styles from './style.module.scss';
import pStyles from '../../style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import iconMonitoring from "../../../../assets/images/component/sidebar/sidebar-icon-monitoring.svg";
import ShowStateServers from "../ShowStateServers/ShowStateServers";


type TState = {
  serverName: string;
  maxPlayers: number;
  playersNow: number;
}

const stateServers: TState[] = [
  { serverName: "TechnoMagic", maxPlayers: 100, playersNow: 32 },
];

export default function Monitoring(): JSX.Element {
  return (
    <section className={`${styles.monitoring} ${pStyles.sectionSidebarBody}`}>
      <div className={`${pStyles.sectionSidebar} ${styles.monitoringHeader}`}>
        <img className={pStyles.icon} src={iconMonitoring} alt="monitoring" />
        <p className={pStyles.sectionSidebar}>Мониторинг</p>
      </div>
      <ShowStateServers list={stateServers} />
    </section>
  );
}
