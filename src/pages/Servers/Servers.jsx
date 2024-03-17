import React from "react";
import "./serversStyle.css";
import "./serversMedia.css";
import imageMain from "../../assets/images/page/Servers/servers-image-main.jpg";
import serversImage from "../../assets/images/page/InfoServerTechnoMagic/techno-magic-image-main.png";
import iconServer from "../../assets/images/servers/TechnoMagic/techno-magic-icon-sign.png";
import Social from "../../components/ui/Social/Social";
import iconServers from "../../assets/images/global/icon-servers.png";
import ServersList from "./components/ServersList/ServersList";

import { INFO_SERVER_TECHNOMAGIC_ROUTE } from "../../routers/routes";

const SERVERS = [
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

export default function Servers(props) {
  let {} = props;
  return (
    <main className="page">
      <section className="servers">
        <div className="servers__header">
          <div className="servers__image">
            <img src={imageMain} alt="" />
          </div>
          <div className="servers__body-info">
            <img className="servers__img" src={iconServers} />
            <div className="server__body-about-servers">
              <h1 className="servers__title title">сервера с модами</h1>
              <p className="servers__subtitle subtitle">
                Описание наших серверов с модификациями
              </p>
            </div>
          </div>
        </div>
        <div className="servers__content container-content">
          <p className="servers__info text-info">
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
