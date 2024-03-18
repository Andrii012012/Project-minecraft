import React from "react";
import "./socialStyle.css";
import "./socialMedia.css";
import iconSocial from "../../../../assets/images/component/sidebar/sidebar-icon-social.svg";
import discord from "../../../../assets/images/global/discord.svg";
import vk from "../../../../assets/images/global/vk.svg";
import SocialList from "../SocialList/SocialList";

const SOCIAL_NETWORK = [
  {
    icon: vk,
    background: "#4e8ace",
    name: "Вконтакте",
  },
  {
    icon: discord,
    background: "#7289da",
    name: "Discord",
  },
];

export default function Social(props) {
  let {} = props;
  return (
    <section className="sidebar-social info-section">
      <div className="sidebar-social__name-section side-bar__name-section">
        <img
          className="sidebar-social__icon-social side-bar__icon"
          src={iconSocial}
          alt=""
        />
        <p className="navigator__text">Социальные сети</p>
      </div>
      <SocialList list={SOCIAL_NETWORK} />
    </section>
  );
}
