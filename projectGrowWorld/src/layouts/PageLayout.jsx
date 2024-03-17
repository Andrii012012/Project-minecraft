import React from "react";
import Header from "../components/header/Header";
import SideBar from "../components/sideBar/SideBar";
import imageMain from "../assets/images/global/image-main.png";
import error from "../assets/images/global/icon-no.svg"

function PageLayout({ children }) {
  return (
    <div className="App">
      <div className="app__error">
        <img className='app__error-icon' src={error} alt="" />
        <p></p>
      </div>
      <div className="app__image">
        <img src={imageMain} />
      </div>
      <div className="app__container">
        <Header />
        <SideBar />
        {children}
        <footer></footer>
      </div>
    </div>
  );
}

export { PageLayout };
