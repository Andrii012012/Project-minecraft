import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../../styles/style.module.scss";
import Accordion from "../../../../components/ui/Accordion/Accordion";
import { TListQuiestion } from "../../interface/type";

export default function QuestionsList(props: {
  list: TListQuiestion[];
}): JSX.Element {
  let { list } = props;
  return (
    <section className={styles.answers}>
      {list.map((item: TListQuiestion, index: number) => {
        return (
          <ul className={styles.list}>
            <li
              key={index}
              id={item.id}
              className={`${styles.sectionName} ${gStyles.sectionName}`}
            >
              {item.title}
            </li>
            <Accordion
              key={index}
              description={item.descriptions}
              title={item.questions}
            />
          </ul>
        );
      })}
    </section>
  );
}
