import React from "react";
import "./DowloadLauncher.css";
import "./DownloadLauncherMediaStyle.css";
import windows from "../../assets/images/global/system-w.png";
import linux from "../../assets/images/global/system-l.png";
import Social from "../../components/ui/social/Social";

export default function DowloadLauncher(props) {
  return (
    <main className="page">
      <section className="down-launcher container-content">
        <h1 className="down-launcher__title title">Скачать лаунчер Майнкрафт</h1>
        <p className="down-laucher__subtitle down-launcher__text subtitle">
          Для игры на наших серверах требуется наш лаунчер с модами для
          Minecraft, без него невозможно зайти на наши сервера.
        </p>
        <p className="down-launcher__description down-launcher__text description--size-small">
          Лаунчер - это программа запуска наших игровых клиентов, эта программа
          автоматически загружает нужные модификации и обновления наших сборок
          Minecraft и позволяет быстро заходить на наши сервера без лишних
          действий.
        </p>
        <h2 className="down-launcher__choose title-section">Выбирете систему:</h2>
        <div className="down-launcher__body-system-choose">
          <div className="down-launcher__system">
            <img src={windows} alt="" />
            <p className="down-launcher__name-system">windows</p>
          </div>
          <div className="down-launcher__system">
            <img src={linux} alt="" />
            <p className="down-launcher__name-system">Linux</p>
          </div>
        </div>
        <Social />
      </section>
    </main>
  );
}
