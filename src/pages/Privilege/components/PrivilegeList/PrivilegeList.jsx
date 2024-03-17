import React from "react";
import "./privilegeStyle.css";
import { memo } from "react";

const PrivilegeList = memo((props) => {
  let { onCalc, list } = props;

  return (
    <div className="privilege__buy privilege__section">
      <h2 className="privilege__title title-section">Привилегии:</h2>
      <ul className="privilege__list">
        {list.map((item, _) => (
          <li
            onClick={(e) => onCalc(e, item.price, item.text)}
            className="privilege__item"
            style={{
              background: `url(${item.img}) center 100%/100% no-repeat`,
            }}
            key={item.text}
          >
            <div className="privilege__price">
              {item.price[0]}
              <span>₽</span>
            </div>
            <p className="privilege__privilege">{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default PrivilegeList;
