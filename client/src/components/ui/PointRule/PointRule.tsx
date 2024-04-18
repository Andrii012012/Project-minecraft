import React from "react";
import styles from "./style.module.scss";
import gStyles from '../../../styles/style.module.scss';
import Point from "../Point/Point";
import { memo } from "react";

interface IProps {
  title: string;
  descriptions: string[];
  pointRules: string[];
  countItem?: number;
  punishments: (string | null)[];
  id: number | string;
}

const PointRule = memo((props: IProps): JSX.Element => {
  let {
    title,
    descriptions,
    pointRules,
    countItem = descriptions.length,
    punishments = [],
    id = "",
  } = props;
  const saveItem = [];
  for (let i = 0; i < countItem; i++) {
    saveItem.push(
      <li key={i} className={styles.item}>
        <Point text={pointRules[i]}/>
        <p className={gStyles.textSmall}>{descriptions[i]}</p>
        {punishments[i] && (
          <strong className={styles.infoPunishment}>
            <span>Наказание:</span>
            {punishments[i]}
          </strong>
        )}
      </li>
    );
  }
  return (
    <ul className={styles.sectionPoint} id={id ? `${id}` : ""}>
      <li className={styles.title}>{title}</li>
      {saveItem}
    </ul>
  );
});

export default PointRule;
