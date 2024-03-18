import React from "react";
import "./homeStyle.css";
import "./homeMedia.css";
import NewsList from "./components/NewsList/NewsList";
import ShowSlides from "./components/ShowSlides/ShowSlides";

export default function Home(props) {
  return (
    <main className="page">
      <section className="show-servers">
        <ShowSlides />
      </section>
      <section className="news">
        <ul className="news__lists">
          <NewsList />
        </ul>
      </section>
    </main>
  );
}
