import React from "react";
import "./listMenuStyle.css";
import "./listMenuMedia.css";
import ItemListMenu from "../ItemListMenu/ItemListMenu";

export default function ListMenu(props) {
  let { list } = props;
  return (
    <>
      {list.map((item, index) => (
        <div key={index} className="footer__list-block">
          <h2 className="footer__title title-section">{item.title}</h2>
          <ul className="footer__list">
            <ItemListMenu list={item.item} />
          </ul>
        </div>
      ))}
    </>
  );
}
