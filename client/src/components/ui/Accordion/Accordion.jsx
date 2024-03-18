import React from "react";
import "./accordionStyle.css";
import "./accordionMedia.css";
import clearClass from "../../../utils/clearClass";
import arrow from "../../../assets/images/global/arrow-down.svg";
import { useEffect, memo } from "react";

const Accordion = memo((props) => {
  let { title, description } = props;

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".accordion")) {
        clearClass(document.querySelectorAll(".accordion"), "active-accordion");
        document
          .querySelectorAll(".accordion__body")
          .forEach((item, _) => (item.style.maxHeight = `${0}px`));
      }
    });
  }, []);

  setTimeout(() => {
    const accordioneBody = document.querySelectorAll(".accordion__body");

    if (accordioneBody.length > 0) {
      initialAccordion();
    }

    function initialAccordion() {
      accordioneBody.forEach((item, _) => {
        const height = item.children[0].getBoundingClientRect().height;
        const parent = item.closest(".accordion");
        parent.addEventListener("click", (e) => {
          if (getComputedStyle(item).maxHeight === "0px") {
            clearClass(
              document.querySelectorAll(".accordion"),
              "active-accordion"
            );
            document
              .querySelectorAll(".accordion__body")
              .forEach((item, _) => (item.style.maxHeight = `${0}px`));
            parent.classList.add("active-accordion");
            item.style.maxHeight = `${height}px`;
          } else {
            parent.children[0].addEventListener("click", () => {
              parent.classList.remove("active-accordion");
              item.style.maxHeight = `${0}px`;
            });
          }
        });
      });
    }
  }, 100);

  const saveAccordion = [];

  if (typeof title === "object") {
    for (let i = 0; i < title.length; i++) {
      saveAccordion.push(
        <li key={i} className="accordion">
          <div className="accordion__header">
            <h4 className="accordion__title">{title[i]}</h4>
            <div className="accordion__close">
              <div className="accordion__wapper-icon">
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
          <div className="accordion__body">
            <p className="accordion__text">{description[i]}</p>
          </div>
        </li>
      );
    }
  } else {
    return (
      <li className="accordion">
        <div className="accordion__header">
          <h4 className="accordion__title">{title}</h4>
          <div className="accordion__close">
            <div className="accordion__wapper-icon">
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
        <div className="accordion__body">
          <p className="accordion__text">{description}</p>
        </div>
      </li>
    );
  }

  return saveAccordion;
});

export default Accordion;
