import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../styles/style.module.scss";
import vk from "../../../assets/images/global/vk.svg";
import telegram from "../../../assets/images/global/telegram.svg";
import discord from "../../../assets/images/global/discord.svg";
import NetworksList from "./components/NetworskList/NetworksList";
import { memo } from "react";

type TSocial = Record<"icon" | "href" | "background", string>;

const SOCIAL_NETWORK: TSocial[] = [
  {
    icon: vk,
    background: "#9cd1ff",
    href: "#",
  },
  {
    icon: telegram,
    background: "#6b91fa",
    href: "#",
  },
  {
    icon: discord,
    background: "#635adf",
    href: "#",
  },
];

const Social = memo((props: { className?: string }): JSX.Element => {
  let { className = "" } = props;
  return (
    <div className={`${styles.social} ${className}`}>
      <h3 className={`${styles.text} ${gStyles.textMedium}`}>
        Расскажите друзьям о наших серверах в соцсетях:
      </h3>
      <ul className={styles.body}>
        <NetworksList list={SOCIAL_NETWORK} />
      </ul>
    </div>
  );
});

export default Social;
