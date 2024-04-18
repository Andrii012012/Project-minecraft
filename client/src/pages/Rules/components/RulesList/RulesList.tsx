import React from "react";
import styles from './style.module.scss';
import RULES from "../../../../constants/rules";
import PointRule from "../../../../components/ui/PointRule/PointRule";

export default function RulesList(): JSX.Element {
  return (
    <section className={styles.pointRules}>
      {RULES.map((item, index) => (
        <PointRule key={index}
          id={item.id}
          title={item.title}
          descriptions={item.descriptions}
          pointRules={item.pointRules}
          punishments={item.punishments}
        />
      ))}
    </section>
  );
}
