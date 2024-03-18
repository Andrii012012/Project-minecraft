import React from "react";
import "./questionsListStyle.css";
import Accordion from "../../../../components/ui/Accordion/Accordion";

export default function QuestionsList(props) {
  let { list } = props;
  return (
    <section className="questions__answers">
      {list.map((item, index) => {
        return (
          <ul className="questions__lists">
            <li
              key={index}
              id={item.id}
              className="questions__section-name title-section"
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
