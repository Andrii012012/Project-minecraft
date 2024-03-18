import React from "react";
import "./loadingStyle.css";
import loadingGif from "../../assets/images/global/loading.gif";

export default function Loading(props) {
  let {} = props;
  return (
    <main className="page">
      <div className="loading">
        <img className="loading__image" src={loadingGif} />
      </div>
    </main>
  );
}
