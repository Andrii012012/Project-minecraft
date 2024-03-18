import React from "react";
import "./CardListStyle.css";
import "./CardListMedia.css";

export default function CardList(props) {
  let { list } = props;
  return (
    <>
      {list.map((item, index) => (
        <li key={index} className="pay__item-play-system">
          <img src={item.img} alt="" />
        </li>
      ))}
    </>
  );
}
