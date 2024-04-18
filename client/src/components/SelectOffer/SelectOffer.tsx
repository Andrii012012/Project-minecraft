import React from "react";
import styles from "./style.module.scss";
import { memo } from "react";
import { TPromotions } from "../../interface/type";

interface IProps {
  className?: string;
  list: TPromotions[];
  onSetValue: (percent: number, price: number) => void;
  text?: string;
}

const SelectOffer = memo((props: IProps): JSX.Element => {
  let { className = "", list, onSetValue, text = "монет" } = props;

  return (
    <ul className={`${styles.select} ${className}`}>
      {list.map((item: TPromotions, index: number) => (
        <li
          onClick={() => onSetValue(Number(item.title), Number(item.percent))}
          key={index}
          className={styles.item}
        >
          <div className={styles.image}>
            <img src={item.img} alt="" />
          </div>
          <div className={styles.body}>
            <p className={styles.money}>
              {item.title}
              <span>{text}</span>
            </p>
            <p className={styles.bonus}>
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
