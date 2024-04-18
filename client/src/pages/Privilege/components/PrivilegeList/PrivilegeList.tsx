import React from "react";
import styles from "./style.module.scss";
import pStyles from '../../style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import { memo } from "react";
import { IPrivileges } from "../../../../constants/donate";

interface IProps {
  onCalc: (
    e: React.MouseEvent<HTMLLIElement>,
    price: number | number[],
    text: string | number
  ) => void;
  list: IPrivileges[];
}

const PrivilegeList = memo((props: IProps): JSX.Element => {
  let { onCalc, list } = props;

  return (
    <div className={styles.privilegeBuy}>
      <h2 className={`${styles.title} ${gStyles.sectionName}`}>Привилегии:</h2>
      <ul className={styles.list}>
        {list.map((item: IPrivileges, _) => (
          <li
            onClick={(e) => onCalc(e, item.price, item.text)}
            className={pStyles.item}
            style={{
              background: `url(${item.img}) center 100%/100% no-repeat`,
            }}
            key={item.text}
          >
            <div className={styles.price}>
              {Array.isArray(item.price) ? item.price[0] : ""}
              <span>₽</span>
            </div>
            <p className={`${styles.privilege} ${styles.titleBig}`}>
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default PrivilegeList;
