import React from "react";
import "./RulesNavigatorStyle.css";
import "./RulesNavigatorMedia.css";
import Points from "../../../../containes/Points/Points.jsx";

export default function RulesNavigator(props) {
  let { list } = props;
  return (
    <ul className="rules__points">
      {list.map((item, index) => (
       
          <Points
            key={index}
            className={item.className}
            dataTp={item.dataTp}
            image={item.image}
            pointName={item.pointName}
          />
  
      ))}
    </ul>
  );
}
