import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../styles/style.module.scss";
import iconDonate from "../../assets/images/global/icon-donate.png";
import TableOpportunity from "./components/TableOpportunity/TableOpportunity";

export default function OpportunityPrivilege(): JSX.Element {
  return (
    <main className={gStyles.page}>
      <section className={styles.opportunityPrivilege}>
        <div className={styles.header}>
          <div className={styles.body}>
            <h1 className={`${styles.title} ${gStyles.titleBig}`}>
              Донат услуги проекту
            </h1>
            <p className={`${styles.subtitle} ${gStyles.subtitleBig}`}>
              Зачем это нужно нам?
            </p>
            <p className={`${styles.explain} ${gStyles.textSmall}`}>
              Любому бесплатному проекту необходима помощь его пользователей для
              его развития и улучшения. Мы работаем над ним каждую минуту
              свободного времени, осваиваем новое и надежное оборудование,
              совершенствуем наши серверы, делаем игру приятной и интересной для
              вас. Все это было бы невозможным без вашей поддержки!
            </p>
          </div>
          <img className={styles.image} src={iconDonate} alt="" />
        </div>
        <div className={`${styles.content} ${gStyles.containerContent}`}>
          <section className={styles.privilegeHas}>
            <h2 className={`${styles.privilegeTitle} ${gStyles.sectionName}`}>Возможности привилегий:</h2>
            <TableOpportunity />
          </section>
        </div>
      </section>
    </main>
  );
}
