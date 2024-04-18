import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../../styles/style.module.scss";
import { IInfoMods } from "../../../../constants/infoServerMainCraft";

export default function InfoModes(props: { list: IInfoMods[] }): JSX.Element {
  let { list } = props;
  return (
    <>
      {list.map((item: IInfoMods, _) => {
        let { icon, title, text } = item;
        return (
          <li key={title} className={styles.item}>
            <img className={styles.icon} src={icon} alt="" />
            <div className={gStyles.descriptionMedium}>
              <h3 className={`${styles.nameMode} ${gStyles.sectionName}`}>
                {title}
              </h3>
              <p className={gStyles.textSmall}>{text}</p>
            </div>
          </li>
        );
      })}
    </>
  );
}
