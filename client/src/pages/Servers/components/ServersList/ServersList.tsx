import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../../styles/style.module.scss";
import { Link } from "react-router-dom";
import { IServers } from "../../interface/interface";

export default function ServersList(props: { list: IServers[] }): JSX.Element {
  let { list } = props;
  return (
    <ul className={styles.description}>
      {list.map((item: IServers, _) => (
        <li key={item.name} className={styles.item}>
          <Link to={item.path} className={styles.wrapper}>
            <img className={styles.image} src={item.background} alt="" />
            <div className={styles.content}>
              <div className={styles.header}>
                <div className={styles.bodyIcon}>
                  <img
                    className={styles.icon}
                    src={item.icon}
                    alt="iconServer"
                  />
                  <div className={styles.body}>
                    <h2 className={gStyles.titleMedium}>{item.name}</h2>
                    <div className={styles.bodyInfo}>
                      <div className={`${styles.numberServers} ${gStyles.textMedium}`}>
                        {item.numberServers} сервера
                      </div>
                      <div className={`${styles.mods} ${gStyles.textMedium}`}>{item.numberMods} модов</div>
                    </div>
                  </div>
                  <div className={`${styles.descriptionVersion} ${gStyles.textMedium}`}>
                    {item.version}
                  </div>
                </div>
              </div>
              <p
                className={styles.descriptionInfo}
              >
                {item.shortDescription}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
