import React from "react";
import "./style.scss";
import gStyles from "../styles/style.module.scss";
import styles from "./style.module.scss";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import error from "../assets/images/global/icon-no.svg";
import Footer from "../components/Footer/Footer";
import imageMain from "../assets/images/global/image-main.png";

export default function PageLayout(props: {
  children: JSX.Element;
}): JSX.Element {
  let { children } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageMain}>
        <img src={imageMain} alt="" />
      </div>
      <div className="error">
        <img src={error} alt="error" />
        <p></p>
      </div>
      <div className={gStyles.container}>
        <Header />
        <div className={styles.body}>
          {children}
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
}
