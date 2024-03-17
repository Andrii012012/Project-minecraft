import React from "react";
import "./tableOpportunityStyle.css";
import "./tableOpportunityMedia.css";
import OpportunityList from "../OpportunityList/OpportunityList";
import OPPORTUNITY_PRIVILEGES from "../../../../constants/opportunityPrivilege";

export default function TableOpportunity(props) {
  let {} = props;
  return (
    <>
      {OPPORTUNITY_PRIVILEGES.map((item, index) => (
        <div className="privilege-has__body">
          <table
            key={index}
            className="privilege-has__list"
            cellpadding="0"
            cellspacing="0"
          >
            <tbody>
              <tr>
                {item.privileges.map((item, _) => (
                  <th key={item} className="privilege-has__item">
                    {item}
                  </th>
                ))}
              </tr>
            </tbody>
            <tbody>
              <OpportunityList list={item.opportunityPrivileges} />
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
}
