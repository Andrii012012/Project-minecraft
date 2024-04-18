import React from "react";
import styles from "./style.module.scss";
import Point from "../Point/Point";

interface IProps {
  children: React.ReactElement;
  point?: boolean;
  number?: string;
  background?: string;
  className?: string;
}

export default function PointFieldGroup(props: IProps): JSX.Element {
  let { children, className, point = true, number = "", background } = props;
  return (
    <li className={styles.fieldFill}>
      <div className={styles.bodyInfo}>
        {point && (
          <Point
            className={className}
            text={number}
            background={background}
          />
        )}
      </div>
      {children}
    </li>
  );
}
