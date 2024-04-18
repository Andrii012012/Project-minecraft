import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../styles/style.module.scss";
import { Link } from "react-router-dom";
import { memo } from "react";

interface IProps {
  className?: string;
  title?: string;
  text?: string;
  name?: string;
  avatar?: string;
  path?: string;
}

const UserHeader = memo((props: IProps): JSX.Element => {
  let {
    className = "",
    title = null,
    text = null,
    name = null,
    avatar = "",
    path = "/",
  } = props;

  return (
    <div className={`${styles.header} ${className}`}>
      <div className={styles.wrapper}>
        <div className={`${styles.avatar} avatar`}>
          <img src={require(`../../assets/upload/avatars/${avatar}`)} alt="" />
        </div>
        <div className={styles.body}>
          <h1 className={`${styles.title} ${gStyles.sectionName}`}>{title}</h1>
          <p className={`${styles.greetings} ${gStyles.sectionName}`}>{text}</p>
          {name ? (
            <p className={styles.name}>{name}</p>
          ) : (
            <Link className={styles.return} to={path}>
              назад
            </Link>
          )}
        </div>
      </div>
    </div>
  );
});

export default UserHeader;
