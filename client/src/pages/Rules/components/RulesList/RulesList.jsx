import React from "react";
import "./RulesListStyle.css";
import "./RulesListMedia.css";
import RULES from "../../../../constants/rules";
import PointRule from "../../../../components/ui/PointRule/PointRule.jsx";

export default function RulesList(props) {
  let {} = props;
  return (
    <section className="point-rules">
      {RULES.map((item, index) => (
        <PointRule key={index}
          id={item.id}
          title={item.title}
          description={item.descriptions}
          pointRule={item.pointRules}
          punishment={item.punishments}
        />
      ))}
    </section>
  );
}
