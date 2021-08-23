import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import SearchForm from "../components/forms/SearchForm";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      include_saga: false,
      include_author: true,
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Pick my new Book</title>
          {/* <meta name="description" content="Generated by create next app" /> */}
          <link rel="icon" href="/book.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Pick my new book</h1>
          <SearchForm />
        </main>
      </div>
    );
  }
}
