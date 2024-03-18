import React from "react";
import "./opportunityHasStyle.css";
import "./opportunityHasMedia.css";

export default function OpportunityHas(props) {
  let { list } = props;
  return (
    <>
      {list.map((item, _) => {
        if (String(item).includes("/static/media/")) {
          return (
            <th key={item} className="privilege-has__item">
              <img className="privilege-has__icon" src={item} alt="" />
            </th>
          );
        } else {
          return (
            <th key={item} className="privilege-has__item">
              <p>{item}</p>
            </th>
          );
        }
      })}
    </>
  );
}
