import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../styles/style.module.scss";
import clearClass from "../../../utils/clearClass";
import arrow from "../../../assets/images/global/arrow-down.svg";
import { useEffect } from "react";

interface IProps {
  title: string[];
  description: string[];
}

const Accordion = (props: IProps): any => {
  let { title, description } = props;


  function resetStyle(): void {
    document
      .querySelectorAll<HTMLDivElement>(`.${styles.accordionBody}`)
      .forEach((item, _) => (item.style.maxHeight = `${0}px`));
  }

  useEffect(() => {
    document.addEventListener("click", (e: MouseEvent) => {
      if (
        e.target &&
        e.target instanceof Element &&
        !e.target.closest(`.${styles.accordion}`)
      ) {
        clearClass(`${styles.activeAccordion}`);
        resetStyle();
      }
    });
  }, []);

  setTimeout(() => {
    const accordioneBody = document.querySelectorAll<HTMLDivElement>(
      `.${styles.accordionBody}`
    );

    if (accordioneBody.length > 0) {
      initialAccordion();
    }

    console.log(document.querySelectorAll<HTMLDivElement>(
      `.${styles.accordionBody1}`
    ));


    function initialAccordion() {
      accordioneBody.forEach((item, _) => {
        const height: number = item.children[0].getBoundingClientRect().height;
        const parent: HTMLElement | null = item.closest(`.${styles.accordion}`);
        parent?.addEventListener("click", () => {
          if (getComputedStyle(item).maxHeight === "0px") {
            clearClass(`${styles.activeAccordion}`);
            resetStyle();
            parent.classList.add(`${styles.activeAccordion}`);
            item.style.maxHeight = `${height}px`;
          } else {
            parent.children[0].addEventListener("click", () => {
              parent.classList.remove(`${styles.activeAccordion}`);
              item.style.maxHeight = `${0}px`;
            });
          }
        });
      });
    }
  }, 800);

  const saveAccordion: React.ReactElement[] = [];

  if (Array.isArray(title)) {
    for (let i = 0; i < title.length; i++) {
      saveAccordion.push(
        <li key={i} className={styles.accordion}>
          <div className={styles.header}>
            <h4 className={`${styles.title} ${gStyles.textSmall}`}>
              {title[i]}
            </h4>
            <div className={styles.close}>
              <div className={styles.wapperIcon}>
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.accordionBody}>
            <p className={styles.text}>{description[i]}</p>
          </div>
        </li>
      );
    }
  } else {
    return (
      <li className={styles.accordion}>
        <div className={styles.header}>
          <h4 className={`${styles.title} ${gStyles.textSmall}`}>{title}</h4>
          <div className={styles.close}>
            <div className={styles.wapperIcon}>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.accordionBody}>
          <p className={styles.text}>{description}</p>
        </div>
      </li>
    );
  }

  return saveAccordion;
};

export default Accordion;
