import React from "react";
import styles from "./styles.module.scss";
import gStyles from '../../../../styles/style.module.scss';
import imageMain from "../../../../assets/images/global/minacraft-image-main.jpg";
import iconTeamProject from "../../../../assets/images/global/icon-team-project.svg";

export default function Header(): JSX.Element {
  return (
    <div className={styles.header}>
      <img className={styles.image} src={imageMain} alt="image" />
      <div className={styles.bodyInfo}>
        <img className={styles.icon} src={iconTeamProject} alt="teamProject" />
        <div>
          <h1 className={`${gStyles.titleBig} ${styles.title}`}>Команда проекта</h1>
          <p className={gStyles.subtitleMedium}>
            Здесь вы можете посмотреть к кому обращаться в случаи чего
          </p>
        </div>
      </div>
    </div>
  );
}
