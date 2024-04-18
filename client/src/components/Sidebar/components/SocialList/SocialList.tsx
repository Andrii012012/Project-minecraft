import React from "react";
import styles from "./style.module.scss";
import gStyles from '../../../../styles/style.module.scss';
import { memo } from "react";

interface IList {
  icon: string;
  background: string;
  name: string;
}

interface IProps {
  list: IList[];
}

const SocialList = memo((props: IProps): JSX.Element => {
  let { list }: IProps = props;
  return (
    <ul className={styles.social}>
      {list.map((item, index) => {
        return (
          <li
            key={index}
            style={{ backgroundColor: item.background }}
            className={styles.item}
          >
            <p className={`${styles.networkName} ${gStyles.titleSmall}`}>
              <img className={styles.networkIcon} src={item.icon} alt="" />
              {item.name}
            </p>
          </li>
        );
      })}
    </ul>
  );
});

export default SocialList;
