import React from "react";
import styles from "./style.module.scss";
import gStyles from '../../../styles/style.module.scss';
import { memo } from "react";

interface IProps {
  className?: string;
  background?: string;
  text: string;
}

const Point = memo((props: IProps): JSX.Element => {
  let { className, background, text } = props;
  return (
    <div
      className={`${styles.point} ${gStyles.textBig} ${className}`}
      style={{ backgroundColor: `${background}` }}
    >
      <span>{text}</span>
    </div>
  );
});

export default Point;
