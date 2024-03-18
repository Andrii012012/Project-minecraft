import React from "react";
import "./networksListStyle.css";
import "./networksListMedia.css";

export default function NetworksList(props) {
  let { list } = props;
  return (
    <>
      {list.map((item, _) => (
        <li key={item.icon} className="social__item social-vk">
          <a href={item.href}>
            <img className="social__icon" src={item.icon} alt="" />
          </a>
        </li>
      ))}
    </>
  );
}
