import React from "react";
import styles from "./style.module.scss";
import gStyles from '../../../../styles/style.module.scss';
import { IInfoServer } from "../../../../constants/infoServerMainCraft";

export default function InfoAboutServer(props: {
  list: IInfoServer[];
}): JSX.Element {
  let { list } = props;
  return (
    <>
      {list.map((item: IInfoServer, index: number) => {
        let { info, aboutInfo } = item;
        return (
          <tr className={styles.item} key={index}>
            <td className={`${styles.infoItem} ${gStyles.textSmall}`}>{info}</td>
            <td className={`${styles.infoItem} ${gStyles.textSmall}`}>{aboutInfo}</td>
          </tr>
        );
      })}
    </>
  );
}
