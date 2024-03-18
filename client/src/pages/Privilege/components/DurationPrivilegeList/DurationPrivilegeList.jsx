import React from "react";
import "./durationPrivilegeListStyle.css";

export default function DurationPrivilegeList(props) {
  let { list, onSelectedDuration, discount, value } = props;
  return (
    <div className="privilege__time-privilege time-privilege privilege__section">
      <h3 className="privilege__title title-section">
        Выберите длительность првилегии:
      </h3>
      <ul className="time-privilege__list">
        {list.map((item, index) => (
          <li
            key={item.duration}
            className="time-privilege__item"
            style={{ background: item.background }}
            onClick={(e) => onSelectedDuration(e, item, index)}
          >
            <div className="time-privilege__discount">
              {discount[index] === 1 ? (
                <span>Без скидки</span>
              ) : (
                <span>Скидка {String(discount[index]).slice(2, 4)}%</span>
              )}
            </div>
            <p className="time-privilege__time text-info">
              {item.duration} {item.duration === "Навсегда" ? null : "месяц"}
            </p>
            <p className="time-privilege__result-price">
              {value.discountPrices[index] > 0
                ? value.discountPrices[index]
                : 0}{" "}
              <span>₽</span>
            </p>
          </li>
        ))}
      </ul>
      ;
    </div>
  );
}
