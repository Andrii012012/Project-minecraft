import React from "react";
import "./dataMemberTeamStyle.css";
import "./dataMemberTeamMedia.css";

export default function DataMemberTeam(props) {
  let { name, avatar, status, onCheckingProfile } = props;

  return (
    <li
      onClick={() => onCheckingProfile(`/profile/${name}`)}
      className="team-project__item"
    >
      <div className="team-project__icon">
        <img
          src={require(`../../../../assets/upload/avatars/${avatar}`)}
          alt=""
        />
      </div>
      <div className="team-project__info">
        <p className="team-project__name">{name}</p>
        <p className="team-project__status">{status}</p>
      </div>
    </li>
  );
}
