import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../styles/style.module.scss";
import imageMain from "../../assets/images/page/Servers/servers-image-main.jpg";
import serversImage from "../../assets/images/page/InfoServerTechnoMagic/techno-magic-image-main.png";
import iconServer from "../../assets/images/servers/TechnoMagic/techno-magic-icon-sign.png";
import Social from "../../components/ui/Social/Social";
import iconServers from "../../assets/images/global/icon-servers.png";
import ServersList from "./components/ServersList/ServersList";
import { INFO_SERVER_TECHNOMAGIC_ROUTE } from "../../routers/routes";
import { IServers } from "./interface/interface";

const SERVERS: IServers[] = [
  {
    background: serversImage,
    path: INFO_SERVER_TECHNOMAGIC_ROUTE,
    icon: iconServer,
    name: "TechnoMagic",
    version: "1.7.10",
    numberServers: 1,
    numberMods: 56,
    shortDescription: `
    Готов погрузиться в мир магии и механизмов - тогда тебе к нам!
    У нас ты найдёшь много интересных модов, которые ты сможешь
    комбинировать как тебе нравится! Строй огромные механизмы,
    которые будут работать быстрее всех! Или же ты можешь стать
    самым настоящим магом! Выбор за тобой!`,
  },
];

export default function Servers(): JSX.Element {
  return (
    <main className={gStyles.page}>
      <section className={styles.servers}>
        <div className={styles.header}>
          <div className={styles.image}>
            <img src={imageMain} alt="" />
          </div>
          <div className={styles.bodyInfo}>
            <img className={styles.img} src={iconServers} />
            <div >
              <h1 className={`${styles.title} ${gStyles.titleBig}`}>сервера с модами</h1>
              <p className={styles.subtitleBig}>
                Описание наших серверов с модификациями
              </p>
            </div>
          </div>
        </div>
        <div className={gStyles.containerContent}>
          <p className={`${styles.info} ${gStyles.textBig}`}>
            У нас доступен пока что 1 сервер, но он уникальный среди других
            проектов с данным типом сервера
          </p>
          <ServersList list={SERVERS} />
          <Social />
        </div>
      </section>
    </main>
  );
}
