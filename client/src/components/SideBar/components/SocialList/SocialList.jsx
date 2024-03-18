import React from "react";
import "./socialListStyle.css";
import "./socialListMedia.css";
import { memo } from "react";

const SocialList = memo((props) => {
  let { list } = props;
  return (
    <ul className="social-sidebar">
      {list.map((item, index) => {
        return (
          <li
            key={index}
            style={{ backgroundColor: item.background }}
            class="social-sidebar__item"
          >
            <p className="social-sidebar__name-network">
              <img
                className="social-sidebar__network-icon"
                src={item.icon}
                alt=""
              />
              {item.name}
            </p>
          </li>
        );
      })}
    </ul>
  );
});

export default SocialList;
