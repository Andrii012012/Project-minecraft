import React from "react";
import styles from './style.module.scss';
import gStyles from '../../styles/style.module.scss';
import NewsList from "./components/NewsList/NewsList";
import ShowSlides from "./components/ShowSlides/ShowSlides";

export default function Home(): JSX.Element {
  return (
    <main className={gStyles.page}>
      <section className={styles.servers}>
        <ShowSlides />
      </section>
      <section className={styles.news}>
        <ul className={styles.list}>
          <NewsList />
        </ul>
      </section>
    </main>
  );
}
