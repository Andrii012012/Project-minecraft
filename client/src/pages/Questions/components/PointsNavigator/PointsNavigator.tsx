import React from "react";
import styles from "./styles.module.scss";
import Points from "../../../../containers/Points/Points";
import { TListPointsnavigator } from "../../interface/type";

export default function PointsNavigator(props: {
  list: TListPointsnavigator[];
}): JSX.Element {
  let { list } = props;
  return (
    <ul className={styles.bodySection}>
      {list.map((item: TListPointsnavigator, _) => (
        <li key={item.dataTp}>
          {" "}
          <Points
            className={item.className}
            pointName={item.pointName}
            image={item.image}
            dataTp={item.dataTp}
          />
        </li>
      ))}
    </ul>
  );
}
