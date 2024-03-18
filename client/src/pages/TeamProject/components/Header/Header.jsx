import React from "react";
import "./headerStyle.css";
import "./headerMedia.css";
import imageMain from "../../../../assets/images/global/minacraft-image-main.jpg";
import iconTeamProject from "../../../../assets/images/global/icon-team-project.svg";

export default function Header(props) {
  let {} = props;
  return (
    <div className="team-project__header">
      <img className="team-project__image" src={imageMain} alt="image" />
      <div className="team-project__body-info">
        <img
          className="team-project__icon-sign"
          src={iconTeamProject}
          alt="teamProject"
        />
        <div className="team-project__body">
          <h1 className="team-project__title title">Команда проекта</h1>
          <p className="team-project__subtitle subtitle">
            Здесь вы можете посмотреть к кому обращаться в случаи чего
          </p>
        </div>
      </div>
    </div>
  );
}
