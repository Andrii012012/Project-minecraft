import React from "react";
import "./UserHeader.css";
import "./UserHeaderMediaStyle.css";
import { Link } from "react-router-dom";
import { memo } from "react";

const UserHeader = memo((props) => {
  let {
    className = "",
    title = null,
    text = null,
    name = null,
    avatar = null,
    path = "/",
  } = props;

  return (
    <div className={`user-header ${className}`}>
      <div className="user-header__wrapper">
        <div className="user-header__avatar avatar">
          <img src={require(`../../assets/upload/avatars/${avatar}`)} alt="" />
        </div>
        <div className="user-header__body">
          <h1 className="user-header__title title">{title}</h1>
          <p className="user-header__greetings">{text}</p>
          {name ? (
            <p className="user-header__name">{name}</p>
          ) : (
            <Link className="user-header__return" to={path}>
              назад
            </Link>
          )}
        </div>
      </div>
    </div>
  );
});

export default UserHeader;
