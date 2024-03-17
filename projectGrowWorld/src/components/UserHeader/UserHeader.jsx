import React from "react";
import "./UserHeader.css";
import "./UserHeaderMediaStyle.css";
import { Link } from "react-router-dom";

export default function UserHeader(props) {
  let { className = '', title = null, text = null, name = null, avatar = null, path } = props;

    return (
      <React.Fragment>
          <div className={`user-header ${className}`}>
            <div className="user-header__wrapper">
              <div className="user-header__avatar avatar">
                <img 
                  src={require(`../../assets/upload/avatars/${avatar}`)}
                  alt=""
                />
              </div>
              <div className="user-header__body">
                 <h1 className='user-header__title title'>{title}</h1>
                 <p className='user-header__greetings'>{text}</p>
                 {name ? <p className='user-header__name'>{name}</p> : <Link className='user-header__return' to={path}>назад</Link>}
              </div>
            </div>
          </div>
      </React.Fragment>
    );
}
