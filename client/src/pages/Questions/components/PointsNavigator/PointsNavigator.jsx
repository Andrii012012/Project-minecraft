import React from "react";
import "./pointsNavigatorStyle.css";
import Points from "../../../../containes/Points/Points";

export default function PointsNavigator(props) {
  let { list } = props;
  return (
    <ul className="questions__body-section">
      {list.map((item, _) => (
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
