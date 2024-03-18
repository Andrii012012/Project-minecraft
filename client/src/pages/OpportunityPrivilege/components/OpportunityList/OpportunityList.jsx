import React from "react";
import "./opportunityListStyle.css";
import "./opportunityListMedia.css";
import OpportunityHas from "../OpportunityHas/OpportunityHas";

export default function OpportunityList(props) {
  let { list } = props;
  return (
    <>
      {list.map((item, _) => (
        <tr>
          <th key={item.command} className="privilege-has__item">
            <strong className="privilege-has__command">{item.command}</strong>
            <p className="privilege-has__description">{item.description}</p>
          </th>
          <OpportunityHas list={item.opportunityHas} />
        </tr>
      ))}
    </>
  );
}
