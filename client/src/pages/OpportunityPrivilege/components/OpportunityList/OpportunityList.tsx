import React from "react";
import styles from "./style.module.scss";
import pStyles from '../../style.module.scss';
import OpportunityHas from "../OpportunityHas/OpportunityHas";
import { IOpporunityPrivileges } from "../../../../constants/opportunityPrivilege";

export default function OpportunityList(props: {
  list: IOpporunityPrivileges[];
}) {
  let { list } = props;
  return (
    <>
      {list.map((item: IOpporunityPrivileges, _) => (
        <tr>
          <th key={item.command} className={pStyles.item}>
            <strong className={styles.command}>{item.command}</strong>
            <p className={styles.description}>{item.description}</p>
          </th>
          <OpportunityHas list={item.opportunityHas} />
        </tr>
      ))}
    </>
  );
}
