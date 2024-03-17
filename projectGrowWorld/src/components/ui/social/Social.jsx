import React from "react";
import "./Social.css";
import './SocialMediaStyle.css';
import vk from "../../../assets/images/global/vk.svg";
import telegram from "../../../assets/images/global/telegram.svg";
import discord from "../../../assets/images/global/discord.svg";

const SOCIAL_NETWORK = [
  {
    icon: vk,
    href: "#",
  },
  {
    icon: telegram,
    href: "#",
  },
  {
    icon: discord,
    href: "#",
  },
];

export default function Social(props) {
  let { className = "" } = props;
  return (
    <div className={`social ${className}`}>
      <h3 className="social__text">
        Расскажите друзьям о наших серверах в соцсетях:
      </h3>
      <ul className="social__body">
        {SOCIAL_NETWORK.map((item, _) => (
          <li key={item.icon} className="social__item social-vk">
            <a href={item.href}>
              <img className="social__icon" src={item.icon} alt="" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
