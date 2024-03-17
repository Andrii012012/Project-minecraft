import React from "react";
import "./DescriptionServer.css";
import "./DescriptionServerMediaStyle.css";
import Social from "../ui/social/Social";

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
            <h1 className="info-server__title">{server}</h1>
          </div>
        </div>
        <div className="info-server__content container-content">
          <section className="about-server">
            <table className="about-server__info">
              {informationServer.map((item, index) => (
                <tr className="about-server__item" key={index}>
                  <td className="about-server__item-info about-server__info-item">
                    {item.info}
                  </td>
                  <td className="about-server__item-about-info about-server__info-item">
                    {item.aboutInfo}
                  </td>
                </tr>
              ))}
            </table>
          </section>
          <p className="info-server__description">{description}</p>
          <Social className="info-server__social" />
          <section className="about-mods">
            <h2 className="about-mods__title">Список модов:</h2>
            <ul className="about-mods__list">
              {infoMods.map((item, _) => (
                <li key={item.title} className="about-mods__item">
                  <img className="about-mods__icon" src={item.icon} alt="" />
                  <div className="about-mods__body-description">
                    <h3 className="about-mods__name-mode">{item.title}</h3>
                    <p className="about-mods__description-mode">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}

export default DescriptionServer;
