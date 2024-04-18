import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../styles/style.module.scss";
import UserHeader from "../UserHeader/UserHeader";
import accessClosed from "../../assets/images/global/access-closed.png";

interface IProps {
  className?: string;
  path?: string;
  avatar?: string;
  title?: string;
  text?: string;
  userHeader?: boolean;
}

export default function AccessClosed(props: IProps): JSX.Element {
  let { className = "", path, avatar, title, text, userHeader = true } = props;
  return (
    <main className={gStyles.page}>
      <section className={`${styles.error} ${className}`}>
        {userHeader && (
          <UserHeader
            className={styles.userHeader}
            avatar={avatar}
            title={title}
            text={text}
            path={path}
          />
        )}
        <div className={styles.content}>
          <img className={styles.image} src={accessClosed} />
          <p className={gStyles.textBig}>Вы не имеете нужды в этом</p>
        </div>
      </section>
    </main>
  );
}
