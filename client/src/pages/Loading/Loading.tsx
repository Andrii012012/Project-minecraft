import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../styles/style.module.scss";
import loadingGif from "../../assets/images/global/loading.gif";

export default function Loading(): JSX.Element {
  return (
    <main className={gStyles.page}>
      <div className={styles.loading}>
        <img className={styles.image} src={loadingGif} />
      </div>
    </main>
  );
}
