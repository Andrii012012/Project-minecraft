import React from "react";
import "./branchesStyle.css";

export default function Branches(props) {
  let { list } = props;
  return (
    <>
      {list.map((item, index) => (
        <section key={index} className='team-project__section-name'>
          <h2 className="team-project__section-name title-section">{item.title}</h2>
           {item.component()}
        </section>
      ))}
    </>
  );
}
