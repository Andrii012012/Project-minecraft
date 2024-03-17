import React from "react";
import './AccessClosed.css';
import UserHeader from "../UserHeader/UserHeader";
import accessClosed from "../../assets/images/global/access-closed.png";

export default function AccessClosed(props) {
  let { className = "", path, avatar, title, text, userHeader = true} = props;
  return (
    <main className='page'>
      <section className={`page-error ${className}`}>
        {userHeader && <UserHeader
          className="page-error__user-header"
          avatar={avatar}
          title={title}
          text={text}
          path={path}
        />}
        <div className="page-error__content">
          <img className="page-error__image" src={accessClosed} />
          <p className="page-error__text">Вы не имеете нужды в этом</p>
        </div>
      </section>
    </main>
  );
}
