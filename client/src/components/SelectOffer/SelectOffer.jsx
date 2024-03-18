import React from "react";
import "./selectOfferStyle.css";
import { memo } from "react";

const SelectOffer = memo((props) => {
  let { className = "", list, onSetValue, text = "монет" } = props;

  return (
    <ul className={`select-offer ${className}`}>
      {list.map((item, index) => (
        <li
          onClick={() => onSetValue(item.title, item.percent)}
          key={index}
          className="select-offer__item"
        >
          <div className="select-offer__image">
            <img src={item.img} alt="" />
          </div>
          <div className="select-offer__body">
            <p className="select-offer__money">
              {item.title}
              <span>{text}</span>
            </p>
            <p className="select-offer__bonus">
              {item.bonus}
              <span>+{item.percent}%</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
});

export default SelectOffer;
