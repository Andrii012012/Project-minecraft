import React from "react";
import "./socialStyle.css";
import "./socialMedia.css";
import vk from "../../../assets/images/global/vk.svg";
import telegram from "../../../assets/images/global/telegram.svg";
import discord from "../../../assets/images/global/discord.svg";
import NetworksList from "./components/NetworskList/NetworksList";
import { memo } from "react";

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

const Social = memo((props) => {
  let { className = "" } = props;
  return (
    <div className={`social ${className}`}>
      <h3 className="social__text">
        Расскажите друзьям о наших серверах в соцсетях:
      </h3>
      <ul className="social__body">
        <NetworksList list={SOCIAL_NETWORK} />
      </ul>
    </div>
  );
});

export default Social;
