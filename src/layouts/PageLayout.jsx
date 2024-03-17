import React from "react";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import imageMain from "../assets/images/global/image-main.png";
import error from "../assets/images/global/icon-no.svg";
import Footer from "../components/Footer/Footer";

function PageLayout({ children }) {
  return (
    <div className="App">
      <div className="app__error">
        <img className="app__error-icon" src={error} alt="" />
        <p></p>
      </div>
      <div className="app__image">
        <img src={imageMain} />
      </div>
      <Header />
      <div className="app__container">
        <SideBar />
        {children}
      </div>
      <Footer />
    </div>
  );
}

export { PageLayout };
