import React from "react";
import "./serversListStyle.css";
import { Link } from "react-router-dom";

export default function ServersList(props) {
  let { list } = props;
  return (
    <ul className="server-description">
      {list.map((item, _) => (
        <li key={item.name} className="server-description__item">
          <Link to={item.path} className="server-description__wrapper">
            <img
              className="server-description__image"
              src={item.background}
              alt=""
            />
            <div className="server-description__content">
              <div className="server-description__header">
                <div className="server-description__body">
                  <img
                    className="server-description__icon"
                    src={item.icon}
                    alt="iconServer"
                  />
                  <div className="server-description__body-title title">
                    <h2 className="server-description__title">{item.name}</h2>
                    <div className="server-description__body-info-server">
                      <div className="server-description__number-servers server-description--background">
                        {item.numberServers} сервера
                      </div>
                      <div className="server-description__mods server-description--background">
                        {item.numberMods} модов
                      </div>
                    </div>
                  </div>
                  <div className="server-description_version">
                    {item.version}
                  </div>
                </div>
              </div>
              <p className="server-description__description">
                {item.shortDescription}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
