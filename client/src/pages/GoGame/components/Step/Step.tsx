import React from "react";
import styles from "./style.module.scss";
import gStyles from '../../../../styles/style.module.scss';
import Point from "../../../../components/ui/Point/Point";
import ButtonNav from "../../../../components/ui/ButtonNav/ButtonNav";
import { IPoints } from "../../interface/interface.js";

export default function Step(props: { list: IPoints[] }) {
  let { list } = props;
  return (
    <>
      {list.map((item: IPoints, index: number) => (
        <li key={index} className={styles.item}>
          <Point
            className={styles.point}
            text={item.textPoint}
            background={item.backgroundPoint}
          />
          <div className={styles.register}>
            <p className={`${styles.text} ${gStyles.sectionName}`}>{item.title}</p>
            <ButtonNav
              className={`${styles.btn} ${
                styles[item.className as keyof React.ReactNode]
              }`}
              path={item.to}
              text={item.text}
              background={item.background}
            />
          </div>
        </li>
      ))}
    </>
  );
}
