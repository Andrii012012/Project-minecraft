import React from "react";
import "./descriptionServer.css";
import "./descriptionServerMedia.css";
import Social from "../ui/Social/Social";
import InfoAboutServer from "./components/InfoAboutServer/InfoAboutServer";
import InfoModes from "./components/InfoModes/InfoModes";

function DescriptionServer(props) {
  let {
    imageMain = null,
    server,
    description,
    infoMods = [],
    informationServer = [],
  } = props;

  return (
    <main className="page">
      <section className="info-server">
        <div className="info-server__header">
          <img className="info-server__image" src={imageMain} alt="" />
          <div className="info-server__header-body">
            <h1 className="info-server__title title">{server}</h1>
          </div>
        </div>
        <div className="info-server__content container-content">
          <section className="about-server">
            <table className="about-server__info">
              <InfoAboutServer list={informationServer} />
            </table>
          </section>
          <p className="info-server__description">{description}</p>
          <Social className="info-server__social" />
          <section className="about-mods">
            <h2 className="about-mods__title">Список модов:</h2>
            <ul className="about-mods__list">
              <InfoModes list={infoMods} />
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}

export default DescriptionServer;
