import React from "react";
import styles from "./style.module.scss";
import pStyles from "../../style.module.scss";
import iconSocial from "../../../../assets/images/component/sidebar/sidebar-icon-social.svg";
import discord from "../../../../assets/images/global/discord.svg";
import vk from "../../../../assets/images/global/vk.svg";
import SocialList from "../SocialList/SocialList";

interface ISocial {
  icon: string;
  background: string;
  name: string;
}

const SOCIAL_NETWORK: ISocial[] = [
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

export default function Social(): JSX.Element {
  return (
    <section className={`${styles.sidebarSocial} ${pStyles.sectionSidebarBody}`}>
      <div className={pStyles.sectionSidebar}>
        <img className={pStyles.icon} src={iconSocial} alt="" />
        <p>Социальные сети</p>
      </div>
      <SocialList list={SOCIAL_NETWORK} />
    </section>
  );
}
