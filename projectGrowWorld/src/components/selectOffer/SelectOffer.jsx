import React from "react";
import "./SelectOffer.css";

export default function SelectOffer(props) {
  let { className = "", offer, func, text = "монет", } = props;

  return (
    <ul className={`select-offer ${className}`}>
      {offer.map((item, index) => (
        <li
          onClick={() => func(item.title, item.percent)}
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
}
