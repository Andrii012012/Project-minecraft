import React from "react";
import "./listOpportunityStyle.css";
import "./listOpportunityMedia.css";
import { Link } from "react-router-dom";

export default function ListOpportunity(props) {
  let { list } = props;
  return (
    <>
      {list.map((item, _) => (
        <li className="list-opportunity__item">
          <Link to={item.path} className="list-opportunity__body">
            <div className="list-opportunity__icon">
              <img src={item.img} alt="" />
            </div>
            <p className="list-opportunity__text">{item.text}</p>
          </Link>
        </li>
      ))}
    </>
  );
}
