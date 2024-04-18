import React from "react";
import styles from "./style.module.scss";
import { memo } from "react";

interface IProps {
  className: string;
  text: string;
}

const ButtonSend = memo((props: IProps): JSX.Element => {
  let { className, text } = props;
  return (
    <button className={`${styles.buttonSend} ${className}`} type="submit">
      {text}
    </button>
  );
});

export default ButtonSend;
