import React from "react";
import styles from './style.module.scss';
import gStyles from '../../../styles/style.module.scss';
import { NavLink } from "react-router-dom";
import { memo } from "react";

interface IProps {
  className?: string;
  text: string;
  path?: string;
  target?: string;
  href?: string;
}

const ListNav = memo((props: IProps) => {
  let { className, text, path, href, target } = props;
  return (
    <>
      <li className={`${styles.item} ${gStyles.textMedium} ${className || ""}`}>
        {path ? (
          <NavLink to={path}>{text}</NavLink>
        ) : (
          <a className={gStyles.textMedium} target={target} href={href}>
            {text}
          </a>
        )}
      </li>
    </>
  );
});

export default ListNav;
