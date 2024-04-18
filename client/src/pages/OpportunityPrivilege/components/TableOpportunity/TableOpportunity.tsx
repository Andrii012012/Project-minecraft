import React from "react";
import styles from "./style.module.scss";
import pStyles from '../../style.module.scss';
import OpportunityList from "../OpportunityList/OpportunityList";
import {
  OPPORTUNITY_PRIVILEGES,
  IOpportuniry,
} from "../../../../constants/opportunityPrivilege";

export default function TableOpportunity() {
  return (
    <>
      {OPPORTUNITY_PRIVILEGES.map((item: IOpportuniry, index: number) => (
        <div className={styles.body}>
          <table key={index} className={pStyles.list} cellPadding={0}>
            <tbody>
              <tr>
                {item.privileges.map((item, _) => (
                  <th key={item} className={`${pStyles.item} ${styles.itemPrivilage}`}>
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
