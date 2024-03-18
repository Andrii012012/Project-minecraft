import React from "react";
import "./userDataStyle.css";
import "./userDataMedia.css";

export default function UserData(props) {
  let { list } = props;
  return (
    <>
      {list.map((item, index) => (
        <li key={index} className="user-data__item">
          <p className="user-data__text">{item.text}</p>
          <p className="user-data__data">{item.info}</p>
        </li>
      ))}
    </>
  );
}
