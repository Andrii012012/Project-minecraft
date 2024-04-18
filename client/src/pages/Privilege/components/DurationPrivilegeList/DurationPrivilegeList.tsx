import React from "react";
import styles from "./style.module.scss";
import pStyles from "../../style.module.scss";
import gStyles from "../../../../styles/style.module.scss";
import { IDuration, TDuration } from "../../../../constants/donate";
import { IStatBuyPrivilege } from "../../interface/interface";

interface IProps {
  list: IDuration[];
  onSelectedDuration: (
    e: React.MouseEvent<HTMLLIElement>,
    item: IDuration,
    index: number
  ) => void;
  discount: TDuration;
  value: IStatBuyPrivilege;
}

export default function DurationPrivilegeList(props: IProps): JSX.Element {
  let { list, onSelectedDuration, discount, value } = props;

  function resultPrice(index: number): number {
    if (value.discountPrices) {
      return value.discountPrices[index] > 0 ? value.discountPrices[index] : 0;
    } else {
      return 0;
    }
  }

  return (
    <div className={styles.privilege}>
      <h3 className={`${styles.title} ${gStyles.titleSmall}`}>
        Выберите длительность привилегии:
      </h3>
      <ul className={styles.list}>
        {list.map((item: IDuration, index: number) => (
          <li
            key={item.duration}
            className={pStyles.item}
            style={{ background: item.background }}
            onClick={(e) => onSelectedDuration(e, item, index)}
          >
            <div className={styles.discount}>
              {discount[index] === 1 ? (
                <span>Без скидки</span>
              ) : (
                <span>Скидка {String(discount[index]).slice(2, 4)}%</span>
              )}
            </div>
            <p className={styles.privilegeDuration}>
              {item.duration === 1e9 ? "Навсегда" : item.duration}{" "}
              {item.duration === 1e9 ? null : "месяц"}
            </p>
            <p className={`${styles.resultPrice} ${gStyles.textMedium}`}>
              {resultPrice(index)} <span>₽</span>
            </p>
          </li>
        ))}
      </ul>
      ;
    </div>
  );
}
