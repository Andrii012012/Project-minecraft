import React from "react";
import styles from "./style.module.scss";
import gStyles from '../../../styles/style.module.scss';
import { NavLink } from "react-router-dom";
import { memo } from "react";

interface IProps {
  className?: string;
  path: string;
  text: string;
  background?: string;
}

const ButtonNav = memo((props: IProps): JSX.Element => {
  let { className, path, text, background } = props;
  return (
    <NavLink
      className={`${styles.btn} ${gStyles.textBig} ${className}`}
      to={path}
      style={{ background: background }}
    >
      {text}
    </NavLink>
  );
});

export default ButtonNav;
